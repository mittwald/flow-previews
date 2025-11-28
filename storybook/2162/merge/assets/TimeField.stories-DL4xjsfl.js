import{j as r,r as f}from"./iframe-6pmDYBey.js";import{b as a,u as p,F as d,t as j}from"./Form-Bc7s9N1y.js";import{L as t}from"./Label-BogZLDOy.js";import{R as u,S as F}from"./ResetButton-DqKgT8J4.js";import{B as l}from"./Button-Bz4oJBBk.js";import{S as b,s as c}from"./Section-Byh4aHn5.js";import{A as E}from"./ActionGroup-8lne9rS6.js";import{as as S,ar as o,g as T}from"./TimeField-DUzJzX0v.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-PozyV8BB.js";import"./PropsContextProvider-Bcab5p0Y.js";import"./mergeRefs-KX5b3W0M.js";import"./index-D7Awe5Nv.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Cc63-Qc3.js";import"./context-D-9qd8rr.js";import"./browser-Curoa5u0.js";import"./utils-CclRT-8x.js";import"./ProgressBar-DSMryv5h.js";import"./Hidden-DGWIRGX2.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-D2rzgsKD.js";import"./Text-DCl4bIjP.js";import"./EmulatedBoldText-CBUClY1I.js";import"./LoadingSpinner-D_0Hr43y.js";import"./Button-Bf_N8W1N.js";import"./useFocusRing-CIK_JYa4.js";import"./useFocusable-k6dtakHQ.js";import"./context-CTAsMywl.js";import"./RSPContexts-BHIIqogi.js";import"./Collection-BzIHwVQs.js";import"./CollectionBuilder-s3gBlVxZ.js";import"./SelectionIndicator-BUH0wchX.js";import"./Separator-C2Ax_jJi.js";import"./useStatic-Bv4Ps5t5.js";import"./Accordion-Buaowi87.js";import"./Alert-ZPf2dT69.js";import"./AlertIcon-mseo8G9-.js";import"./AlertBadge-DrOGK01L.js";import"./Align-Sifn-_cY.js";import"./Popover-Dd0-1EJu.js";import"./OverlayTrigger-DSzgE-rS.js";import"./TableFooterRow-BRY3iv1g.js";import"./SkeletonText-BkaviKx9.js";import"./Avatar-COqmIfCf.js";import"./AvatarStack-Cs-Y5kji.js";import"./Badge-B7ODamfh.js";import"./BigNumber-couKEJe3.js";import"./Breadcrumb-WdUL6sK0.js";import"./Link-CJ38LeDn.js";import"./Heading-6phWYNIK.js";import"./Legend-B78FuCBX.js";import"./FileCardList-CHBLnU9n.js";import"./Image-Dcyti7CF.js";import"./Color-BRGYsDjI.js";import"./Content-CuYBsCwt.js";import"./ContextualHelpTrigger-vqI_wpNC.js";import"./CounterBadge-DyAdtC5E.js";import"./DonutChart-DZLxrNmm.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BknOPFCn.js";import"./Header-DUij04U4.js";import"./Initials-DRBi35hY.js";import"./InlineCode-DxO_Ztsz.js";import"./PopoverTrigger-BKP_QpSy.js";import"./Separator-C65il62N.js";import"./Message-A68FCta2.js";import"./MessageSeparator-YwFb4hEt.js";import"./NavigationGroup-BryWzwah.js";import"./Notification-QlklNnDw.js";import"./NotificationProvider-DiOqRdCr.js";import"./ProgressBar-bXP38px7.js";import"./Rating-DQiv0-CI.js";import"./Skeleton-BwBlZATo.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Mr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async x=>{await c(1500),B(x)},h=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};
