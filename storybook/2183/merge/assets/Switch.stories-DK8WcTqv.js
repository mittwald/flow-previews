import{j as r,r as F}from"./iframe-BfTJ8OoU.js";import{b as n,u as p,F as a,t as S}from"./Form-D5Qxyvhh.js";import{R as u,S as l}from"./ResetButton-Btgq5MTA.js";import{B as d}from"./Button-CAnEum-p.js";import{S as x,s as c}from"./Section-ieM08Mfc.js";import{A as E}from"./ActionGroup-BXvzv2B4.js";import{S as s,g as j}from"./TimeField-Dni6ZWL5.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BLLy2Odl.js";import"./PropsContextProvider-pKtaUqJb.js";import"./mergeRefs-C4nh5J5i.js";import"./index-wBRAyXy5.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BuC6mQ9L.js";import"./context-DfwvGs8v.js";import"./browser-_NOMM9Cq.js";import"./utils-CAkX6XFC.js";import"./IconWarning-CnDmU8KM.js";import"./Text-ChPpwgcs.js";import"./EmulatedBoldText-Do8p-rFi.js";import"./LoadingSpinner-CDSlajDH.js";import"./Button-v46gVvAB.js";import"./ProgressBar-BquNzOVV.js";import"./Hidden-Chv29Vof.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D-g0YXE4.js";import"./useFocusable-DTCTS8eh.js";import"./context-DqfyIwOm.js";import"./RSPContexts-B_hP9IPu.js";import"./Collection-B-SpNygI.js";import"./CollectionBuilder-Cew6fxQL.js";import"./SelectionIndicator-BLntbEi9.js";import"./Separator-B1RL2fWY.js";import"./useStatic-DZbTJ5BB.js";import"./Accordion-EetxEBhv.js";import"./Alert-CFx8_uD8.js";import"./AlertIcon-Bk9PFIDr.js";import"./AlertBadge-zn-1W_0t.js";import"./Align-DLans5uB.js";import"./Popover-DxokbZnr.js";import"./OverlayTrigger-CvXwRqat.js";import"./TableFooterRow-BfBKGOJY.js";import"./SkeletonText-BAh3LYCP.js";import"./Avatar-DBLpjnAX.js";import"./AvatarStack-BHU-_pXB.js";import"./Badge-B1Bj-2mY.js";import"./BigNumber-BzAzuR-m.js";import"./Breadcrumb-DO48AN_q.js";import"./Link-fRrhQgjx.js";import"./Heading-C_Cd2XWG.js";import"./Legend-D59IIsbr.js";import"./FileCardList-Crd4-rJi.js";import"./Image-D7QRJIgn.js";import"./Color-BcE30bux.js";import"./Content-BbEJXFUy.js";import"./Label-OsD2mDHN.js";import"./ContextualHelpTrigger-BBU6ZCx4.js";import"./CounterBadge-qpjoO2b-.js";import"./DonutChart-DSkqB0Nj.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D4r4pUSf.js";import"./Header-DgEQtgXz.js";import"./Initials-DNuviWyX.js";import"./InlineCode-OjIKEpaK.js";import"./PopoverTrigger-zZ3JKVIV.js";import"./Separator-B5S4ffvA.js";import"./Message-Bivfjnxf.js";import"./MessageSeparator-BWNjQn1R.js";import"./NavigationGroup-JMiAIgUz.js";import"./Notification-6ZwISdx7.js";import"./NotificationProvider-BNxs8g7x.js";import"./ProgressBar-BlJq2aYe.js";import"./Rating-BodFdmqC.js";import"./Skeleton--CLyUYrz.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Mr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),g(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Nr as __namedExportsOrder,Mr as default};
