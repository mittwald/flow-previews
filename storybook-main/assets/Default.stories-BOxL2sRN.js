import{j as r}from"./iframe-DTBy15H7.js";import{A as e}from"./ActionGroup-BXdOYEdg.js";import{B as t}from"./Button-QHOz67K3.js";import{A as u,s as h}from"./Section-CTt0hPdU.js";import{S as x}from"./TimeField-C25JplCF.js";import{L as y}from"./Link-CxbSfmHB.js";import{u as f,F as j}from"./Form-DK8ugccL.js";import{S}from"./ResetButton--ELhH4TP.js";import"./index-nuYtCEEu.js";import"./dynamic-CCPexUYC.js";import"./PropsContextProvider-Fi7tnu-J.js";import"./mergeRefs-CWVC3DZq.js";import"./index-C9i3V5R3.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Djz7NATM.js";import"./Text-Bj8vPlc0.js";import"./browser-MW83o6M0.js";import"./utils-Dl3W8pzT.js";import"./EmulatedBoldText-Dvqrfp28.js";import"./LoadingSpinner-CRyT1UDC.js";import"./Button-BYfJcV7w.js";import"./ProgressBar-BPzzwKl5.js";import"./Hidden-CGEKkcWL.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DDV21Rg9.js";import"./useFocusRing-DZNjyW13.js";import"./useFocusable-C5o0miI6.js";import"./useLocalizedStringFormatter-C6mCvBeu.js";import"./context-DioYia5p.js";import"./RSPContexts-DH-gZpq1.js";import"./Collection-D1XcVqi_.js";import"./CollectionBuilder-C71l8wdj.js";import"./SelectionIndicator-CxONpiWv.js";import"./Separator-CSQG4MPx.js";import"./useStatic-eHzIFJyj.js";import"./Accordion-DnPtHmZG.js";import"./Alert-QdSgDx1T.js";import"./AlertIcon-B0N13FEc.js";import"./AlertBadge-8jy2QUL6.js";import"./Align-DQZB8NzV.js";import"./Popover-7hNwjNSl.js";import"./OverlayTrigger-ZFUPrMkD.js";import"./TableFooterRow-CtpRNrqi.js";import"./SkeletonText-DpsupKVa.js";import"./Avatar-BILpTm5T.js";import"./AvatarStack-CUiO0Zcy.js";import"./Badge-CT04WDK1.js";import"./BigNumber-BCtBSLB-.js";import"./Breadcrumb-B6l_HQxY.js";import"./Heading-Ca-tELgf.js";import"./Legend-Bpj9sjZW.js";import"./FileCardList-39D8aOFP.js";import"./Image-MOe90XqG.js";import"./Color-ClQVjgLv.js";import"./Content-Dlpa9xN1.js";import"./Label-DjwrD9Fk.js";import"./ContextualHelpTrigger-BRKcFrI9.js";import"./CounterBadge-12ncM8Mc.js";import"./DonutChart-CLp4EYV9.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-7vWoxhWM.js";import"./Header-DBPOtdGg.js";import"./Initials-aSFKpGEw.js";import"./InlineCode-_CBCXquU.js";import"./PopoverTrigger-BD_9xpzq.js";import"./Separator-B_RuElQr.js";import"./Message-C0AuzCP0.js";import"./MessageSeparator-Bf9oDxzN.js";import"./NavigationGroup-BiQENMNY.js";import"./Notification-wHOEjy82.js";import"./NotificationProvider-B2b2Yliw.js";import"./ProgressBar-DqwDkFTJ.js";import"./Rating-Bb3yeVUh.js";import"./Skeleton-C9fzI41z.js";const qr={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{action:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(x,{slot:"primary",children:"Activate"})]})},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=f();return r.jsx(j,{form:A,onSubmit:async()=>await h(2e3),children:r.jsxs(e,{...o,children:[r.jsx(S,{color:"accent",children:"Submit"}),r.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="secondary">Edit</Button>
      <Switch slot="primary">Activate</Switch>
    </ActionGroup>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Link slot="abort">Forgot password?</Link>
      <Button color="accent">Login</Button>
    </ActionGroup>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <ActionGroup {...props}>
          <SubmitButton color="accent">Submit</SubmitButton>
          <Button color="secondary" variant="soft">
            Abort
          </Button>
        </ActionGroup>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};const zr=["Default","Danger","Info","WithSecondaryAction","WithExtraSecondaryAction","Mobile","WithSwitch","WithLink","WithReactHookForm"];export{s as Danger,n as Default,a as Info,p as Mobile,c as WithExtraSecondaryAction,d as WithLink,l as WithReactHookForm,i as WithSecondaryAction,m as WithSwitch,zr as __namedExportsOrder,qr as default};
