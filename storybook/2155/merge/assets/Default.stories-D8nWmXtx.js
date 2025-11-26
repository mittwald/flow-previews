import{j as r}from"./iframe-D9CYFPXr.js";import{A as e}from"./ActionGroup-Ccd39lHI.js";import{B as t}from"./Button-CT-xyYfH.js";import{A as u,s as h}from"./Section-CA0EDsnV.js";import{S as x}from"./TimeField-BkJlZcm0.js";import{L as y}from"./Link-Bm2iZsG_.js";import{u as f,F as j}from"./Form-BNmwIDs0.js";import{S}from"./ResetButton-DJ1KjM7J.js";import"./index-nuYtCEEu.js";import"./dynamic-SXs7A3g7.js";import"./PropsContextProvider-C-2riE67.js";import"./mergeRefs-vtU4phNc.js";import"./index-U9K-BUpK.js";import"./clsx-B-dksMZM.js";import"./IconWarning-jXguM53C.js";import"./Text-DJSjVfmJ.js";import"./browser-D2ZJCi1x.js";import"./utils-yR_DAamg.js";import"./EmulatedBoldText-BO0x8ST2.js";import"./LoadingSpinner-gB0VXrmM.js";import"./Button-DG6HuID3.js";import"./ProgressBar-bCwxisfs.js";import"./Hidden-CwV9BSsN.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dx6KMOks.js";import"./useFocusRing-DS6hlMbf.js";import"./useFocusable--HhDjXRb.js";import"./useLocalizedStringFormatter-S4nfhuc7.js";import"./context-COeqZE1E.js";import"./RSPContexts-CiawBZSO.js";import"./Collection-D-Uil-_a.js";import"./CollectionBuilder-DI5MHw1U.js";import"./SelectionIndicator-IjsyYsuv.js";import"./Separator-Do2CJS7r.js";import"./useStatic-DvORlamL.js";import"./Accordion-BArRtOTS.js";import"./Alert-CyjiVY23.js";import"./AlertIcon-8Ocv2v3H.js";import"./AlertBadge-CRoJOsK9.js";import"./Align-CLrsPfYt.js";import"./Popover-BNCnXQAV.js";import"./OverlayTrigger-CUUjZI6u.js";import"./TableFooterRow-OQSmAD90.js";import"./SkeletonText-Dmouj86v.js";import"./Avatar-BkdvaG88.js";import"./AvatarStack-C3tebcLD.js";import"./Badge-C2tMlnMT.js";import"./BigNumber-ijILQR_w.js";import"./Breadcrumb-BxUPCHCP.js";import"./Heading-CavYhFH8.js";import"./Legend-DtDM-qUx.js";import"./FileCardList-D5Ru0u2M.js";import"./Image-DgZNHogz.js";import"./Color-ykv-EnxY.js";import"./Content-2XO0f1sV.js";import"./Label-CzxcXiJX.js";import"./ContextualHelpTrigger-Cks81a1U.js";import"./CounterBadge-V16geG9B.js";import"./DonutChart-D89z5kPJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C5cgRyU-.js";import"./Header-qxJ8AaGd.js";import"./Initials-ft2Izcj0.js";import"./InlineCode-CDcWeZk1.js";import"./PopoverTrigger-CVb4_ztY.js";import"./Separator-BrIDoq1X.js";import"./Message-BoLQMEmF.js";import"./MessageSeparator-CgZcEmeT.js";import"./NavigationGroup-CXptzVeF.js";import"./Notification-Kh0NRtbz.js";import"./NotificationProvider-BfspMVKw.js";import"./ProgressBar-B-qkFYl5.js";import"./Rating-D8qxWgHK.js";import"./Skeleton-BBVDwrbz.js";const qr={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{action:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(x,{slot:"primary",children:"Activate"})]})},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=f();return r.jsx(j,{form:A,onSubmit:async()=>await h(2e3),children:r.jsxs(e,{...o,children:[r.jsx(S,{color:"accent",children:"Submit"}),r.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
