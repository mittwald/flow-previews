import{j as r}from"./iframe-DALqHAyB.js";import{A as e}from"./ActionGroup-BmRr98fb.js";import{B as t}from"./Button-BbfkfOCO.js";import{A as u,s as h}from"./Action-yEvGmIpX.js";import{S as y}from"./Switch-BaDq03Gc.js";import{L as x}from"./Link-CeNoH_pB.js";import{u as j,F as f}from"./Form-DWtgofJo.js";import"./index-nuYtCEEu.js";import"./dynamic-aVFvjRkA.js";import"./flowComponent-CvsgRxlP.js";import"./index-B4rQ27h-.js";import"./clsx-B-dksMZM.js";import"./index-CPatoSxs.js";import"./getActionGroupSlot-BwSd42Bi.js";import"./useStatic-WJbJZsQS.js";import"./IconWarning-CcDUp5xj.js";import"./Text-BxJmp77a.js";import"./browser-pVqjrops.js";import"./EmulatedBoldText-Dxvms5Wy.js";import"./Text-vTixOjUz.js";import"./utils-C0MA_VWy.js";import"./LoadingSpinner-K4oR_LJz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CC_Z0iQM.js";import"./context-aw0dYPtu.js";import"./Button-B6bWdLOu.js";import"./ProgressBar-udFHgrmU.js";import"./Label-D28Pduqa.js";import"./Hidden-SLgE1qP8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-85XHUWXZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-RYFgUS1k.js";import"./useFocus-CR3niFsF.js";import"./useFocusRing-BpmoLA66.js";import"./useFocusable-UlymAToY.js";import"./context-CWEo3fLe.js";import"./useFieldComponent-CuLkv2Wr.js";import"./react-children-utilities-C1NF1MDP.js";import"./ClearPropsContext-frWmeUQW.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-D8hcpFKJ.js";import"./useToggleState-D_bLNmdj.js";import"./useFormReset-C8DxwuW7.js";import"./useControlledState-BAMCZ0BN.js";import"./VisuallyHidden-BkwE9NAp.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";const ur={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{action:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(y,{slot:"primary",children:"Activate"})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(x,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=j();return r.jsx(f,{form:A,onSubmit:async()=>await h(2e3),children:r.jsx(e,{...o,children:r.jsx(t,{color:"accent",type:"submit",children:"Login"})})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
