import{j as r,r as x}from"./iframe-D_taohHE.js";import{b as a,u as l,F as d,t as j}from"./Form-B6g14ecx.js";import{L as o}from"./Label-BE25Mez9.js";import{R as c,S as f}from"./ResetButton-B35okg0e.js";import{B as p}from"./Button-BzDcn9gw.js";import{S as g,s as u}from"./Section-BGMokIOG.js";import{A as b}from"./ActionGroup-CtTj0KGg.js";import{N as t,v as E,g as S}from"./TimeField-CWCEj6Gp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CPLuTyBP.js";import"./PropsContextProvider-DHsq54k3.js";import"./mergeRefs-K1QocDOZ.js";import"./index-C4Et8VlK.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-ofdICzIo.js";import"./context-EvUTNNVJ.js";import"./browser-CjAcuXT7.js";import"./utils-pUWJ6aLq.js";import"./ProgressBar-CjQdCBSe.js";import"./Hidden-D9ZNC0Hz.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Bw09QPeB.js";import"./Text-ssmcNS2J.js";import"./EmulatedBoldText-B54qJ1r4.js";import"./LoadingSpinner-BB9iqpcc.js";import"./Button-BveBpqmD.js";import"./useFocusRing-BpV933-R.js";import"./useFocusable-XY9B6x70.js";import"./context-Bl1_lLpq.js";import"./RSPContexts-vZQTzHeQ.js";import"./Collection-DnhOSFxc.js";import"./CollectionBuilder-DgFesNsg.js";import"./SelectionIndicator-TPIlv31g.js";import"./Separator-B9t_aoMS.js";import"./useStatic-D1L299Q0.js";import"./Accordion-hys_Z-y_.js";import"./Alert-BVOvaJmZ.js";import"./AlertIcon-DsUCMzzQ.js";import"./AlertBadge-DupL7VIa.js";import"./Align-lAtYkD7V.js";import"./Popover-CZk6Ipu0.js";import"./OverlayTrigger-DdpU5CpM.js";import"./TableFooterRow-CkmR9iEr.js";import"./SkeletonText-DZCbX5t_.js";import"./Avatar-CyCWf7Sw.js";import"./AvatarStack-DjK4_GvM.js";import"./Badge-df7STlF7.js";import"./BigNumber-C4erlLZ0.js";import"./Breadcrumb-BQwb8t2O.js";import"./Link-DNZGcrEw.js";import"./Heading-B0K4zEMw.js";import"./Legend-DWlLuLfH.js";import"./FileCardList-DKvIBCyR.js";import"./Image-DajkgyNB.js";import"./Color-DoYXFuaB.js";import"./Content-BMBcTKWL.js";import"./ContextualHelpTrigger-Di1ZUJxb.js";import"./CounterBadge-Ch0G_sYN.js";import"./DonutChart-CGEra__W.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DipKuwAa.js";import"./Header-BOGXXJwV.js";import"./Initials-B0t7F_wS.js";import"./InlineCode-DhfaAW0i.js";import"./PopoverTrigger-9SsYTlve.js";import"./Separator-DNLy0jJN.js";import"./Message-aTJ2QV4k.js";import"./MessageSeparator-l6wGhyEd.js";import"./NavigationGroup-DObyIeLm.js";import"./Notification-D5W1roVe.js";import"./NotificationProvider-DOl1AdVQ.js";import"./ProgressBar-68JDRf4g.js";import"./Rating-Cq95JU_R.js";import"./Skeleton-T4ao3t7M.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Hr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Kr as __namedExportsOrder,Hr as default};
