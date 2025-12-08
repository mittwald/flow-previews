import{j as r,r as f}from"./iframe-Bl94pFC8.js";import{b as a,u as p,F as d,t as j}from"./Form-Bhzywxgr.js";import{L as t}from"./Label-DSusOXDR.js";import{R as u,S as F}from"./ResetButton-Cm6oOnRk.js";import{B as l}from"./Button-AfVTn90Y.js";import{S as b,s as c}from"./Section-LN95lzay.js";import{A as E}from"./ActionGroup-CYfLKjjP.js";import{as as S,ar as o,g as T}from"./TimeField-Dr4KQ3tF.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CIZa5yke.js";import"./PropsContextProvider-BQui21V8.js";import"./mergeRefs-BiBjcigA.js";import"./index-DsFLFuyK.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Cy6aSMx0.js";import"./context-DhigdGAb.js";import"./browser-BA3Ei853.js";import"./utils-zKD0YG1w.js";import"./ProgressBar-C-lIvLR2.js";import"./Hidden-BS8eNNR-.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-SCcj4Iql.js";import"./Text-DCRPGY0z.js";import"./EmulatedBoldText-CCSVbhNW.js";import"./LoadingSpinner-CJ6B7oAG.js";import"./Button-Bw0lcVwr.js";import"./useFocusRing-_izhPlj5.js";import"./useFocusable-BC3ywUsf.js";import"./context-BpghOljr.js";import"./RSPContexts-CHIkVN0y.js";import"./Collection-Bsn8m2mI.js";import"./CollectionBuilder-D14md_BA.js";import"./SelectionIndicator-Bx-x-xLH.js";import"./Separator-R67wGb_t.js";import"./useStatic-gdaW8QxK.js";import"./Accordion-CCFKHcUe.js";import"./Alert-DXgIB8vT.js";import"./AlertIcon-KdhHTMr9.js";import"./AlertBadge-Bsnm1FW5.js";import"./Align-vdE1Hw63.js";import"./Popover-Vgu8QpdP.js";import"./OverlayTrigger-CoDb3nvg.js";import"./TableFooterRow-yXwprf4A.js";import"./SkeletonText-BxAwRS8K.js";import"./Avatar-CBi98t6a.js";import"./AvatarStack-BCyimaIH.js";import"./Badge-CWRZ3wRS.js";import"./BigNumber-BOmO8_9H.js";import"./Breadcrumb-qLsGxUTH.js";import"./Link-CxjACdrd.js";import"./Heading-gu5HE-XK.js";import"./Legend-Bk5heO9K.js";import"./FileCardList-BKpHqFCP.js";import"./Image-zwt55Zy5.js";import"./Color-BEk31k5R.js";import"./Content-CFmPNCl8.js";import"./ContextualHelpTrigger-CUwhkzFI.js";import"./CounterBadge-Dy2ngnrh.js";import"./DonutChart-DyH97w7v.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Doe0mmHM.js";import"./Header-DENQ7Dxk.js";import"./Initials-TwvVZF9j.js";import"./InlineCode-CTUORIgt.js";import"./PopoverTrigger-om_tcJyU.js";import"./Separator-F44i8CmN.js";import"./Message-CzqxdJ5a.js";import"./MessageSeparator-DcMZZRKU.js";import"./NavigationGroup-CUhbVSuu.js";import"./Notification-bDPr6UcS.js";import"./NotificationProvider-BFKLdZBe.js";import"./ProgressBar-BdgJs4zS.js";import"./Rating-DCow-Fra.js";import"./Skeleton-BOcdA3Th.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Mr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async x=>{await c(1500),B(x)},h=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
