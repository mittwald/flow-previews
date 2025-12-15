import{j as r,r as S}from"./iframe-Can218wR.js";import{u as c,F as d,t as b,b as h}from"./Form-v65766Ha.js";import{R as F,S as x}from"./ResetButton-D6uw8gbh.js";import{B as f}from"./Button-AcWb1Ypk.js";import{S as E,s as u}from"./Section-BTVZhucR.js";import{A as T}from"./ActionGroup-D5JFk098.js";import{c as i,T as l,g as B,O as y}from"./TimeField-Qf6H4lnp.js";import{L as p}from"./Label-B5Ra9wZk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B5g7bVbH.js";import"./PropsContextProvider-S6gtJagB.js";import"./mergeRefs-BFKt9ill.js";import"./index-41Illj3A.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CTBkRU60.js";import"./context-DZl3H9Sd.js";import"./browser-BKQSdhjf.js";import"./utils-BpZeyfMN.js";import"./IconWarning-BNaFuPnH.js";import"./remote-CHcOizPe.js";import"./Text-C2o8kJX0.js";import"./EmulatedBoldText-CmVjk4cf.js";import"./LoadingSpinner-kXbrPTzW.js";import"./Button-DOjUwuNT.js";import"./ProgressBar-C-KA2KcW.js";import"./Hidden-Ce1Num8z.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing--c5UJZIk.js";import"./useFocusable-CkcRY4mN.js";import"./context-a0yvmfmj.js";import"./RSPContexts-DDMcPOu0.js";import"./Collection-UY3diGBM.js";import"./CollectionBuilder-JWhtjQVf.js";import"./SelectionIndicator-91dIKEGk.js";import"./Separator-Cy0HWEka.js";import"./useStatic-s9qeAkES.js";import"./Accordion-BgJpPLeZ.js";import"./Alert-DNx5xnLB.js";import"./AlertIcon-BzlU70Rb.js";import"./AlertBadge-BHQgXXA1.js";import"./Align-Axes71gv.js";import"./Popover-DKl9KM4_.js";import"./OverlayTrigger-B0hM9LOB.js";import"./TableFooterRow-Cft_Is3v.js";import"./SkeletonText-Bw7qmtCY.js";import"./Avatar-BfkdzloE.js";import"./AvatarStack-ipC9pyUN.js";import"./Badge-DMgarT1o.js";import"./BigNumber-Bw32ey4C.js";import"./Breadcrumb-DBxV6kjL.js";import"./Link-DNZxb3XI.js";import"./Heading-8IBs5lHH.js";import"./Legend-DjesrZkx.js";import"./FileCardList-DQKgLEdB.js";import"./Image-AqS4biBk.js";import"./Color-DxWZJ5ge.js";import"./Content-Dbq5WHJl.js";import"./ContextualHelpTrigger-B581tVEc.js";import"./CounterBadge-D_w8ES0b.js";import"./DonutChart-CbLkgRTJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bu8mFA12.js";import"./Header-6r5jIFQ1.js";import"./Initials-Bv13zVwh.js";import"./InlineCode-TSvlP2S4.js";import"./PopoverTrigger-Dwaqs-tN.js";import"./Separator-peM-T1F1.js";import"./Message-DlbPq8DG.js";import"./MessageSeparator-RZcHNTnk.js";import"./NavigationGroup-Ccyet6Sq.js";import"./Notification-Bij5M0u6.js";import"./NotificationProvider-Cyooz_pt.js";import"./ProgressBar-DTzdfFR4.js";import"./Rating-BMsAHHGJ.js";import"./Skeleton-Fu0f40Js.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,w=A("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(y,{value:t,textValue:t,children:t},t)}),zr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async g=>{await u(1500),w(g)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <Autocomplete {...props}>
          <TextField isInvalid>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
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
}`,...n.parameters?.docs?.source}}};const Jr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Jr as __namedExportsOrder,zr as default};
