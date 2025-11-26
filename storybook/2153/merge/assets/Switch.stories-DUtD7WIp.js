import{j as r,r as F}from"./iframe-Bdha8Dos.js";import{b as n,u as p,F as a,t as S}from"./Form-DsRRTown.js";import{R as u,S as l}from"./ResetButton-DLYfuyn3.js";import{B as d}from"./Button-C0-Fr6HH.js";import{S as x,s as c}from"./Section-Yfvm1zIN.js";import{A as E}from"./ActionGroup-BdiJCCv8.js";import{S as s,F as j}from"./Modal-Aj_CgExV.js";import"./index-nuYtCEEu.js";import"./dynamic-DRPW6Rpg.js";import"./flowComponent-B8Uju4HR.js";import"./index-D82oAODb.js";import"./clsx-B-dksMZM.js";import"./index-Dy-GF6N8.js";import"./useLocalizedStringFormatter-Bnw0-aa9.js";import"./context-3OjubdPM.js";import"./browser-Dc0PT9zF.js";import"./utils-DRkQtTgN.js";import"./IconWarning-BYkVHlH3.js";import"./Text-DoSb3lbH.js";import"./EmulatedBoldText-CrNw8-Fv.js";import"./LoadingSpinner-KHyfkLfb.js";import"./Button-BzZ_Ef_b.js";import"./ProgressBar-DPQU74BD.js";import"./Hidden-CgXpbbtr.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CBKtE_2O.js";import"./useFocusable-CPRTwPrN.js";import"./context-5Dj5ASGX.js";import"./RSPContexts-CAeHzh3l.js";import"./Collection-DhVbXxy4.js";import"./CollectionBuilder-CI6cKXkO.js";import"./SelectionIndicator-zKM_RP2Q.js";import"./Separator-C0h06tUt.js";import"./useStatic-BN3Mf5gg.js";import"./FileCardList-DCzdLjIe.js";import"./Avatar-DCpppZC2.js";import"./AlertIcon-D8P-W6sm.js";import"./Image-DP0ZI2sD.js";import"./Link-Bw8zZtLF.js";import"./ControlledNotification-CjmaONZw.js";import"./Flex-h-xfZw1g.js";import"./Accordion-DFcwElaU.js";import"./Alert-Dx0A4bZf.js";import"./AlertBadge-plElskYS.js";import"./Align-CNxnU-VK.js";import"./AvatarStack-2m33Ddtx.js";import"./BigNumber-pV4cwxuQ.js";import"./Breadcrumb-Mg3slNRi.js";import"./Heading-D7df73UY.js";import"./Legend-CLh9Cweu.js";import"./Color-BvgoEP4D.js";import"./TableFooterRow-Dn4D5lV4.js";import"./SkeletonText-C3SnEUx2.js";import"./Content-Dv2IYPHI.js";import"./Label-Dn2sUami.js";import"./CounterBadge-ClteCI38.js";import"./DonutChart-LJEadiGp.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Cnrnw12O.js";import"./Header-CK0wvNYk.js";import"./Initials-hmCcaCSn.js";import"./InlineCode-nRx3MSIv.js";import"./LayoutCard-CsMFtYY4.js";import"./Separator-Cv4HYQX1.js";import"./MessageSeparator-M20ehGxL.js";import"./NavigationGroup-CKxBhPrE.js";import"./Notification-D7qFMSh0.js";import"./NotificationProvider-Bfyf-xJg.js";import"./ProgressBar-DXWjfO91.js";import"./Rating-DAeIfaa9.js";import"./Skeleton-DvR-lN_z.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Hr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Kr as __namedExportsOrder,Hr as default};
