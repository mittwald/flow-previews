import{j as r,r as F}from"./iframe-Clmt7jYU.js";import{b as n,u as p,F as a,t as S}from"./Form-FyEhClNl.js";import{R as u,S as l}from"./ResetButton-Bi81rG4L.js";import{B as d}from"./Button-Cpx-qVCp.js";import{S as x,s as c}from"./Section-D-4V5L53.js";import{A as E}from"./ActionGroup-3f2mOrmo.js";import{S as s,g as j}from"./TimeField-C0di3Y5z.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-ByO6kVlP.js";import"./PropsContextProvider-Cmcxz_BG.js";import"./mergeRefs-BVqKkfsA.js";import"./index-DiVEBKFG.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter--ByhM2n4.js";import"./context-J-yaWB4J.js";import"./browser-BVazs59Q.js";import"./utils-BaIVInUf.js";import"./IconWarning-CMDAZJGy.js";import"./Text-BQs7jhBI.js";import"./EmulatedBoldText-D5ywUyQZ.js";import"./LoadingSpinner-CenMvatO.js";import"./Button-MP-U6i_K.js";import"./ProgressBar-D_4BHyIX.js";import"./Hidden-BZve3Xik.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-SBYuaUD7.js";import"./useFocusable-BgBMU_CS.js";import"./context-BbRYzAs6.js";import"./RSPContexts-BNhmdufL.js";import"./Collection-xRwg1v5k.js";import"./CollectionBuilder-kvAQOu82.js";import"./SelectionIndicator-Wyz_1aA8.js";import"./Separator-Cl_cENZa.js";import"./useStatic-Bnfhfmst.js";import"./Accordion-2-mRDe9S.js";import"./Alert-BgyTes7-.js";import"./AlertIcon-BuWV4Npm.js";import"./AlertBadge-B-cIikZ6.js";import"./Align-kP2wQykA.js";import"./Popover--yCHfjbQ.js";import"./OverlayTrigger-Ce8vZdG2.js";import"./TableFooterRow-Dn-FDhfn.js";import"./SkeletonText-Ox4-vvjw.js";import"./Avatar-Cap9qVE3.js";import"./AvatarStack-CyBZbnmd.js";import"./Badge-DSWTM4Cn.js";import"./BigNumber-K7d08C_A.js";import"./Breadcrumb-CW32JSiJ.js";import"./Link-Cdb-IjP9.js";import"./Heading-DOf1Gbjg.js";import"./Legend-DpHbpxDT.js";import"./FileCardList-C6knu-Gv.js";import"./Image-mYPdxUVA.js";import"./Color-C3WK5Ehq.js";import"./Content-BaHGf9op.js";import"./Label-D60DkhLa.js";import"./ContextualHelpTrigger-Dzc-OR_f.js";import"./CounterBadge-DOY94Zrr.js";import"./DonutChart-B4Pw1gDt.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-fPCU1kmj.js";import"./Header-geqBE9py.js";import"./Initials-C8rRxGXt.js";import"./InlineCode-DsrKBfEK.js";import"./PopoverTrigger-Bac14MEQ.js";import"./Separator-C0rYsohv.js";import"./Message-_byUr7fM.js";import"./MessageSeparator-aISn9Nk9.js";import"./NavigationGroup-DCJQpVuq.js";import"./Notification-jgdKyHAO.js";import"./NotificationProvider-DV-TZjHG.js";import"./ProgressBar-CKu71Xlr.js";import"./Rating-D3r7O8dK.js";import"./Skeleton-K56s_bs8.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Mr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),g(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
