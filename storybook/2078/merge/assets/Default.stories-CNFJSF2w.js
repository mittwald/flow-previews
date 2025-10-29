import{j as r}from"./iframe-qTztDmQ9.js";import{A as e}from"./ActionGroup-DAaZlTM3.js";import{B as t}from"./Button-B4S912ZH.js";import{A as u,s as h}from"./Action-DjajA33V.js";import{S as y}from"./Switch-BXBGqT-_.js";import{L as x}from"./Link-Cv-RM-OJ.js";import{u as j,F as f}from"./Form-_TiOEZqw.js";import"./index-nuYtCEEu.js";import"./dynamic-BKe9EJ7U.js";import"./flowComponent-Bak4HlW4.js";import"./index-P12icK_R.js";import"./clsx-B-dksMZM.js";import"./index-_9O3yG_2.js";import"./getActionGroupSlot-CA2czWAm.js";import"./useStatic-CJuuYRzf.js";import"./IconWarning-DPAJHOeD.js";import"./Text-C9f0aLW8.js";import"./browser-D-RoGxAl.js";import"./EmulatedBoldText-C04JDKuJ.js";import"./Text-B9fEov2V.js";import"./utils-CdWUsvaa.js";import"./LoadingSpinner-C5H0hepe.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CIyKheH2.js";import"./context-bFJEZtp8.js";import"./Button-BJWArbVY.js";import"./ProgressBar-BBefMTke.js";import"./Label-Bo8Flsc_.js";import"./Hidden-B1UrvXuA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-uF6YmIyy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dljjmf_y.js";import"./useFocus-CdJCReig.js";import"./useFocusRing-hzSL5p2c.js";import"./useFocusable-Q1pEG0eK.js";import"./context-Cf3mID_7.js";import"./useFieldComponent-DGEmXGQh.js";import"./react-children-utilities-C8dGDy-T.js";import"./ClearPropsContext-CkWIpOjD.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-CCDaBvVW.js";import"./useToggleState-DbzNfvF3.js";import"./useFormReset-CmjicI53.js";import"./useControlledState-tlJilXH9.js";import"./VisuallyHidden-DWMxxCWQ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";const ur={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{action:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(y,{slot:"primary",children:"Activate"})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(x,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=j();return r.jsx(f,{form:A,onSubmit:async()=>await h(2e3),children:r.jsx(e,{...o,children:r.jsx(t,{color:"accent",type:"submit",children:"Login"})})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button color="danger">Delete project</Button>
      <Button slot="abort" variant="soft" color="secondary">
        Abort
      </Button>
    </ActionGroup>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button>Ok</Button>
    </ActionGroup>
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="primary" color="accent">
        Add email address
      </Button>
      <Button slot="secondary" variant="soft" color="secondary">
        Save and add more
      </Button>
      <Button slot="abort" variant="soft" color="secondary">
        Abort
      </Button>
    </ActionGroup>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="primary" color="accent">
        Add email address
      </Button>
      <Button slot="secondary" variant="soft" color="secondary">
        Save and add more
      </Button>
      <Button slot="secondary" variant="soft" color="secondary">
        Save as new
      </Button>
      <Button slot="abort" variant="soft" color="secondary">
        Abort
      </Button>
    </ActionGroup>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="secondary">Edit</Button>
      <Switch slot="primary">Activate</Switch>
    </ActionGroup>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Link slot="abort">Forgot password?</Link>
      <Button color="accent">Login</Button>
    </ActionGroup>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <ActionGroup {...props}>
          <Button color="accent" type="submit">
            Login
          </Button>
        </ActionGroup>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};const hr=["Default","Danger","Info","WithSecondaryAction","WithExtraSecondaryAction","Mobile","WithSwitch","WithLink","WithReactHookForm"];export{s as Danger,n as Default,a as Info,p as Mobile,i as WithExtraSecondaryAction,m as WithLink,l as WithReactHookForm,c as WithSecondaryAction,d as WithSwitch,hr as __namedExportsOrder,ur as default};
