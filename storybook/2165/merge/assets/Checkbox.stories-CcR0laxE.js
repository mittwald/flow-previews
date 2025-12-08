import{j as r,r as x}from"./iframe-Bl94pFC8.js";import{b as p,u as c,F as a,t as F}from"./Form-Bhzywxgr.js";import{R as l,S as h}from"./ResetButton-Cm6oOnRk.js";import{B as d}from"./Button-AfVTn90Y.js";import{S as j,s as u}from"./Section-LN95lzay.js";import{A as b}from"./ActionGroup-CYfLKjjP.js";import{s as t,g as E}from"./TimeField-Dr4KQ3tF.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CIZa5yke.js";import"./PropsContextProvider-BQui21V8.js";import"./mergeRefs-BiBjcigA.js";import"./index-DsFLFuyK.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Cy6aSMx0.js";import"./context-DhigdGAb.js";import"./browser-BA3Ei853.js";import"./utils-zKD0YG1w.js";import"./IconWarning-SCcj4Iql.js";import"./Text-DCRPGY0z.js";import"./EmulatedBoldText-CCSVbhNW.js";import"./LoadingSpinner-CJ6B7oAG.js";import"./Button-Bw0lcVwr.js";import"./ProgressBar-C-lIvLR2.js";import"./Hidden-BS8eNNR-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-_izhPlj5.js";import"./useFocusable-BC3ywUsf.js";import"./context-BpghOljr.js";import"./RSPContexts-CHIkVN0y.js";import"./Collection-Bsn8m2mI.js";import"./CollectionBuilder-D14md_BA.js";import"./SelectionIndicator-Bx-x-xLH.js";import"./Separator-R67wGb_t.js";import"./useStatic-gdaW8QxK.js";import"./Accordion-CCFKHcUe.js";import"./Alert-DXgIB8vT.js";import"./AlertIcon-KdhHTMr9.js";import"./AlertBadge-Bsnm1FW5.js";import"./Align-vdE1Hw63.js";import"./Popover-Vgu8QpdP.js";import"./OverlayTrigger-CoDb3nvg.js";import"./TableFooterRow-yXwprf4A.js";import"./SkeletonText-BxAwRS8K.js";import"./Avatar-CBi98t6a.js";import"./AvatarStack-BCyimaIH.js";import"./Badge-CWRZ3wRS.js";import"./BigNumber-BOmO8_9H.js";import"./Breadcrumb-qLsGxUTH.js";import"./Link-CxjACdrd.js";import"./Heading-gu5HE-XK.js";import"./Legend-Bk5heO9K.js";import"./FileCardList-BKpHqFCP.js";import"./Image-zwt55Zy5.js";import"./Color-BEk31k5R.js";import"./Content-CFmPNCl8.js";import"./Label-DSusOXDR.js";import"./ContextualHelpTrigger-CUwhkzFI.js";import"./CounterBadge-Dy2ngnrh.js";import"./DonutChart-DyH97w7v.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Doe0mmHM.js";import"./Header-DENQ7Dxk.js";import"./Initials-TwvVZF9j.js";import"./InlineCode-CTUORIgt.js";import"./PopoverTrigger-om_tcJyU.js";import"./Separator-F44i8CmN.js";import"./Message-CzqxdJ5a.js";import"./MessageSeparator-DcMZZRKU.js";import"./NavigationGroup-CUhbVSuu.js";import"./Notification-bDPr6UcS.js";import"./NotificationProvider-BFKLdZBe.js";import"./ProgressBar-BdgJs4zS.js";import"./Rating-DCow-Fra.js";import"./Skeleton-BOcdA3Th.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,g=S("submit"),Lr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),g(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},i={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...s.parameters?.docs?.source}}};const Mr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Mr as __namedExportsOrder,Lr as default};
