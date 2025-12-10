import{j as r,r as x}from"./iframe-BaRURXeF.js";import{b as a,u as l,F as d,t as j}from"./Form-CWGjihS8.js";import{L as o}from"./Label-CpPOvDoZ.js";import{R as c,S as f}from"./ResetButton-uHNtfVEW.js";import{B as p}from"./Button-BjAgJLRT.js";import{S as g,s as u}from"./Section-CfuTaxA1.js";import{A as b}from"./ActionGroup-BqTo77Ty.js";import{N as t,v as E,g as S}from"./TimeField-DEmi22Cp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-LiyYElAE.js";import"./PropsContextProvider-CKQsAkKj.js";import"./mergeRefs-CGRzoa_B.js";import"./index-BhlYqO80.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-yUHQIKaT.js";import"./context-CYqmZhth.js";import"./browser-CM47kAFn.js";import"./utils-DLb-qyNT.js";import"./ProgressBar-CbCQbUzb.js";import"./Hidden-4QxVQfrM.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-G7PHo1OD.js";import"./remote-EuXJkqzN.js";import"./Text-BMdRX-ix.js";import"./EmulatedBoldText-DsXTzWmB.js";import"./LoadingSpinner-BDiYNwtM.js";import"./Button-DbzxAUZp.js";import"./useFocusRing-Yd8LsoRn.js";import"./useFocusable-Dn7zfyGG.js";import"./context-CODOobiJ.js";import"./RSPContexts-DmKb4WxY.js";import"./Collection-43nLtjEw.js";import"./CollectionBuilder-Dy7CTaNG.js";import"./SelectionIndicator-BZ3vqlEj.js";import"./Separator-cqbaw05v.js";import"./useStatic-CNK9zRwr.js";import"./Accordion-DkBEZ7j6.js";import"./Alert-RHiIiWHO.js";import"./AlertIcon-C9siGvOC.js";import"./AlertBadge-CBeycHMc.js";import"./Align-DsDp8vGU.js";import"./Popover-DoWZP4BQ.js";import"./OverlayTrigger-DFb3iraJ.js";import"./TableFooterRow-BxDD7_XF.js";import"./SkeletonText-Bt_cfZBE.js";import"./Avatar-1SCvSi8v.js";import"./AvatarStack-DuV7PUnh.js";import"./Badge-DRN_LKUg.js";import"./BigNumber-Ci6wTEcF.js";import"./Breadcrumb-Bd90eB5U.js";import"./Link-CWq94S9a.js";import"./Heading-BwlLLsXH.js";import"./Legend-D_JENtdo.js";import"./FileCardList-3twRSReA.js";import"./Image-B_c5xt_D.js";import"./Color-DkHd8LXz.js";import"./Content-XdBLbNrv.js";import"./ContextualHelpTrigger-HbivXqDu.js";import"./CounterBadge-w2O-pKbc.js";import"./DonutChart-ijRk1-wk.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Dbt83k4-.js";import"./Header-BQdYbaW-.js";import"./Initials-CE2vMNu3.js";import"./InlineCode-CvuJDjkP.js";import"./PopoverTrigger-Brf0WlCq.js";import"./Separator-BCTCUtVH.js";import"./Message-xiisQYm4.js";import"./MessageSeparator-DUGderQ8.js";import"./NavigationGroup-Q3YJa56w.js";import"./Notification-BRKgriQg.js";import"./NotificationProvider-CiuSUFHe.js";import"./ProgressBar-xPSdXL8f.js";import"./Rating-BSWRSES9.js";import"./Skeleton-Cmq3II1T.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Kr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
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
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...m.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Ur as __namedExportsOrder,Kr as default};
