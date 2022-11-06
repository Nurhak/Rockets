import withMainLayout from '../layouts/withMainLayout';

function NotFound() {
  return <div>NotFound</div>;
}

NotFound.displayName = '404';

export default withMainLayout(NotFound);
