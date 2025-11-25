import{j as r,r as F}from"./iframe-CN4WTwYv.js";import{b as n,u as p,F as a,t as S}from"./Form-C5WmNT0c.js";import{R as u,S as l}from"./ResetButton-6fmp_2Jb.js";import{B as d}from"./Button-DKV_rJZ0.js";import{S as x,s as c}from"./Section-ChtzXzqR.js";import{A as E}from"./ActionGroup-DyQk2EE1.js";import{S as s,F as j}from"./Modal-JtS1GCqs.js";import"./index-nuYtCEEu.js";import"./dynamic-B0RnxgZh.js";import"./flowComponent-DKJqWTmA.js";import"./index-BzOdNhte.js";import"./clsx-B-dksMZM.js";import"./index-NeY_xEz-.js";import"./useLocalizedStringFormatter-CTHVjSGk.js";import"./context-WZFoFUL5.js";import"./browser-CybO_GX9.js";import"./utils-dijpHYHY.js";import"./IconWarning-OOGKEFPc.js";import"./Text-CuaHEgKJ.js";import"./EmulatedBoldText-D_eW2liq.js";import"./LoadingSpinner-pxkgsSpr.js";import"./Button-ABhPpFMV.js";import"./ProgressBar-BPzw3REr.js";import"./Hidden-BZs9FL3y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BwoDdEBQ.js";import"./useFocusable-CuBMSLKI.js";import"./context-D5Q2rEdS.js";import"./RSPContexts-qFT5nqOw.js";import"./Collection-_B8J5S67.js";import"./CollectionBuilder-BScyvG_s.js";import"./SelectionIndicator-BD_RUCQf.js";import"./Separator-HWaNsUvC.js";import"./useStatic-B_XtSJ-Q.js";import"./FileCardList-B7y733ft.js";import"./Avatar-DUVggXrd.js";import"./AlertIcon-CK_ZHrhI.js";import"./Image-sLmDF6h6.js";import"./Link-BWI3Ij3P.js";import"./ControlledNotification-B4SeTnx9.js";import"./Flex-CdYYO_HZ.js";import"./Accordion-DTfzyVKJ.js";import"./Alert-D1kyjDat.js";import"./AlertBadge-vMsaaONk.js";import"./Align-CuYESgtx.js";import"./AvatarStack-DqNBCzbY.js";import"./BigNumber-Cmue7ZKp.js";import"./Breadcrumb-DD6fnOqx.js";import"./Heading-BxJhHPjy.js";import"./Legend-CvwACQxn.js";import"./Color-UdZqV4-Q.js";import"./TableFooterRow-CtEJIn2Q.js";import"./SkeletonText-CEwNi-L-.js";import"./Content-Bb2nt3RH.js";import"./Label-BRmwvfXT.js";import"./CounterBadge-DqyLtEIg.js";import"./DonutChart-BRPZRgK_.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-e6fNnZwM.js";import"./Header-BVqKPdhQ.js";import"./Initials-C__jbqKP.js";import"./InlineCode-BLOKlvTP.js";import"./LayoutCard-BjkzdleE.js";import"./Separator-altoXYC_.js";import"./MessageSeparator-DzKM339D.js";import"./NavigationGroup-Ry0FrTf6.js";import"./Notification-CJdFBvUm.js";import"./NotificationProvider-CD_MO59g.js";import"./ProgressBar-ktu-Gi_7.js";import"./Rating-c-hlPqMh.js";import"./Skeleton-D5vx8POd.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Hr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
