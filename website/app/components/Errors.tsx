import type { ThrownBundleError, ThrownNotFoundError } from '../loaders/documentation.server';
import { QuickLinks } from './Quicklinks';

// TODO descriptions etc

export function NotFound({ error }: { error: ThrownNotFoundError }) {
  return (
    <div className="mt-20 max-w-lg mx-auto">
      <Title statusCode={error.status} title="This page could not be found"/>
      <QuickLinks/>
    </div>
  );
}

export function BadRequest({ error }: { error: ThrownBundleError }) {
  return (
    <div className="mt-20 max-w-lg mx-auto">
      <Title statusCode={error.status} title="This page could not be generated"/>
    </div>
  );
}

export function ServerError({ title }: { title: string }) {
  return (
    <div className="mt-20 max-w-lg mx-auto">
      <Title statusCode={500} title={title}/>
    </div>
  );
}

interface TitleProps {
  statusCode: number;
  title?: string;
}

export function Title({ statusCode, title }: TitleProps): JSX.Element {
  return (
    <>
      <div className="font-anton mb-4 text-center lg:text-left">
        <h1 className="text-7xl lg:text-9xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
            {statusCode}
          </span>
        </h1>
        <h2 className="text-6xl lg:text-6xl text-gray-900 dark:text-white">{title}</h2>
      </div>
    </>
  );
}