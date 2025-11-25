import{j as r,r as f}from"./iframe-CN4WTwYv.js";import{b as a,u as p,F as d,t as j}from"./Form-C5WmNT0c.js";import{L as t}from"./Label-BRmwvfXT.js";import{R as u,S as F}from"./ResetButton-6fmp_2Jb.js";import{B as l}from"./Button-DKV_rJZ0.js";import{S as b,s as c}from"./Section-ChtzXzqR.js";import{A as E}from"./ActionGroup-DyQk2EE1.js";import{aw as S,av as o,F as T}from"./Modal-JtS1GCqs.js";import"./index-nuYtCEEu.js";import"./dynamic-B0RnxgZh.js";import"./flowComponent-DKJqWTmA.js";import"./index-BzOdNhte.js";import"./clsx-B-dksMZM.js";import"./index-NeY_xEz-.js";import"./useLocalizedStringFormatter-CTHVjSGk.js";import"./context-WZFoFUL5.js";import"./browser-CybO_GX9.js";import"./utils-dijpHYHY.js";import"./ProgressBar-BPzw3REr.js";import"./Hidden-BZs9FL3y.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-OOGKEFPc.js";import"./Text-CuaHEgKJ.js";import"./EmulatedBoldText-D_eW2liq.js";import"./LoadingSpinner-pxkgsSpr.js";import"./Button-ABhPpFMV.js";import"./useFocusRing-BwoDdEBQ.js";import"./useFocusable-CuBMSLKI.js";import"./context-D5Q2rEdS.js";import"./RSPContexts-qFT5nqOw.js";import"./Collection-_B8J5S67.js";import"./CollectionBuilder-BScyvG_s.js";import"./SelectionIndicator-BD_RUCQf.js";import"./Separator-HWaNsUvC.js";import"./useStatic-B_XtSJ-Q.js";import"./FileCardList-B7y733ft.js";import"./Avatar-DUVggXrd.js";import"./AlertIcon-CK_ZHrhI.js";import"./Image-sLmDF6h6.js";import"./Link-BWI3Ij3P.js";import"./ControlledNotification-B4SeTnx9.js";import"./Flex-CdYYO_HZ.js";import"./Accordion-DTfzyVKJ.js";import"./Alert-D1kyjDat.js";import"./AlertBadge-vMsaaONk.js";import"./Align-CuYESgtx.js";import"./AvatarStack-DqNBCzbY.js";import"./BigNumber-Cmue7ZKp.js";import"./Breadcrumb-DD6fnOqx.js";import"./Heading-BxJhHPjy.js";import"./Legend-CvwACQxn.js";import"./Color-UdZqV4-Q.js";import"./TableFooterRow-CtEJIn2Q.js";import"./SkeletonText-CEwNi-L-.js";import"./Content-Bb2nt3RH.js";import"./CounterBadge-DqyLtEIg.js";import"./DonutChart-BRPZRgK_.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-e6fNnZwM.js";import"./Header-BVqKPdhQ.js";import"./Initials-C__jbqKP.js";import"./InlineCode-BLOKlvTP.js";import"./LayoutCard-BjkzdleE.js";import"./Separator-altoXYC_.js";import"./MessageSeparator-DzKM339D.js";import"./NavigationGroup-Ry0FrTf6.js";import"./Notification-CJdFBvUm.js";import"./NotificationProvider-CD_MO59g.js";import"./ProgressBar-ktu-Gi_7.js";import"./Rating-c-hlPqMh.js";import"./Skeleton-D5vx8POd.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Gr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async x=>{await c(1500),g(x)},h=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Hr as __namedExportsOrder,Gr as default};
