import{j as r,r as j}from"./iframe-D_IiP5QF.js";import{b as a,u as d,F as p,t as b}from"./Form-BMgHR3ch.js";import{L as t}from"./Label-CdaBbVbz.js";import{R as f,S as h}from"./ResetButton-Didzh697.js";import{B as u}from"./Button-DslN622a.js";import{S as E,s as c}from"./Section-DN7xTxEc.js";import{A as S}from"./ActionGroup-BXHZPnYY.js";import{B as l,D as o,$ as D,E as B,g}from"./TimeField-D8SJmsIb.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-0ssToOFv.js";import"./PropsContextProvider-TH6V0sK9.js";import"./mergeRefs-Bp0aekJa.js";import"./index-BTEdBuyN.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Bl7QXKV0.js";import"./context-CzHIh5kC.js";import"./browser-Xi37Uwf1.js";import"./utils-BUDUz3oT.js";import"./ProgressBar-D214GkFL.js";import"./Hidden-zZrG9yI5.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CeWNQ8u9.js";import"./Text-DtkWnfcs.js";import"./EmulatedBoldText-D1D5MzAW.js";import"./LoadingSpinner-DAahn8uY.js";import"./Button-wMdqoBKT.js";import"./useFocusRing-DHnNsPBr.js";import"./useFocusable-dF9VeguM.js";import"./context-DdWIe0N6.js";import"./RSPContexts-rRqbWPHZ.js";import"./Collection-Dl2pWzkI.js";import"./CollectionBuilder-BsunlkxQ.js";import"./SelectionIndicator-BdD8HwUv.js";import"./Separator-DWlmTG_C.js";import"./useStatic-D7hf1hLx.js";import"./Accordion-BLud_gcY.js";import"./Alert-CAMU0sJf.js";import"./AlertIcon-CiVM0veU.js";import"./AlertBadge-DIoWGYfv.js";import"./Align-Dt5Z_tfD.js";import"./Popover-LH5uR-Ai.js";import"./OverlayTrigger-B9GYFSa8.js";import"./TableFooterRow-BLUBBtbs.js";import"./SkeletonText-Dp6bSbtZ.js";import"./Avatar-fgBKjcwX.js";import"./AvatarStack-DD1RlKSP.js";import"./Badge-CKHtuWwK.js";import"./BigNumber-QFeyc9Z7.js";import"./Breadcrumb-DTcVTg7F.js";import"./Link-1CuEWTvW.js";import"./Heading-DD9mIgnZ.js";import"./Legend-EDbvCt-7.js";import"./FileCardList-C_PuopUU.js";import"./Image-BxIb2zH6.js";import"./Color-Daqpvuwq.js";import"./Content-C5HeRuSJ.js";import"./ContextualHelpTrigger-Dpf2pUop.js";import"./CounterBadge-DZiQt8Xn.js";import"./DonutChart-D6ZAMqYo.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CtlfmTig.js";import"./Header-DgvsXn7S.js";import"./Initials-O7Qdz8vn.js";import"./InlineCode-BQGvjfc4.js";import"./PopoverTrigger-_UX04Jxf.js";import"./Separator-DlDRANMe.js";import"./Message-Ii4ctpYX.js";import"./MessageSeparator-BTKC9hrY.js";import"./NavigationGroup-BpmkmOoX.js";import"./Notification-BI6q-vGx.js";import"./NotificationProvider-BANQjypq.js";import"./ProgressBar-pgqNFsRb.js";import"./Rating-cGBPgfkq.js";import"./Skeleton-Bw8asRqa.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ur={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=d({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(p,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...m.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Yr as __namedExportsOrder,Ur as default};
