import{j as r,r as x}from"./iframe-D_taohHE.js";import{b as l,u as a,F as c,t as j}from"./Form-B6g14ecx.js";import{L as s}from"./Label-BE25Mez9.js";import{R as u,S as d}from"./ResetButton-B35okg0e.js";import{B as t}from"./Button-BzDcn9gw.js";import{S,s as p}from"./Section-BGMokIOG.js";import{A as b}from"./ActionGroup-CtTj0KGg.js";import{q as m,g as B}from"./TimeField-CWCEj6Gp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CPLuTyBP.js";import"./PropsContextProvider-DHsq54k3.js";import"./mergeRefs-K1QocDOZ.js";import"./index-C4Et8VlK.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-ofdICzIo.js";import"./context-EvUTNNVJ.js";import"./browser-CjAcuXT7.js";import"./utils-pUWJ6aLq.js";import"./ProgressBar-CjQdCBSe.js";import"./Hidden-D9ZNC0Hz.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Bw09QPeB.js";import"./Text-ssmcNS2J.js";import"./EmulatedBoldText-B54qJ1r4.js";import"./LoadingSpinner-BB9iqpcc.js";import"./Button-BveBpqmD.js";import"./useFocusRing-BpV933-R.js";import"./useFocusable-XY9B6x70.js";import"./context-Bl1_lLpq.js";import"./RSPContexts-vZQTzHeQ.js";import"./Collection-DnhOSFxc.js";import"./CollectionBuilder-DgFesNsg.js";import"./SelectionIndicator-TPIlv31g.js";import"./Separator-B9t_aoMS.js";import"./useStatic-D1L299Q0.js";import"./Accordion-hys_Z-y_.js";import"./Alert-BVOvaJmZ.js";import"./AlertIcon-DsUCMzzQ.js";import"./AlertBadge-DupL7VIa.js";import"./Align-lAtYkD7V.js";import"./Popover-CZk6Ipu0.js";import"./OverlayTrigger-DdpU5CpM.js";import"./TableFooterRow-CkmR9iEr.js";import"./SkeletonText-DZCbX5t_.js";import"./Avatar-CyCWf7Sw.js";import"./AvatarStack-DjK4_GvM.js";import"./Badge-df7STlF7.js";import"./BigNumber-C4erlLZ0.js";import"./Breadcrumb-BQwb8t2O.js";import"./Link-DNZGcrEw.js";import"./Heading-B0K4zEMw.js";import"./Legend-DWlLuLfH.js";import"./FileCardList-DKvIBCyR.js";import"./Image-DajkgyNB.js";import"./Color-DoYXFuaB.js";import"./Content-BMBcTKWL.js";import"./ContextualHelpTrigger-Di1ZUJxb.js";import"./CounterBadge-Ch0G_sYN.js";import"./DonutChart-CGEra__W.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DipKuwAa.js";import"./Header-BOGXXJwV.js";import"./Initials-B0t7F_wS.js";import"./InlineCode-DhfaAW0i.js";import"./PopoverTrigger-9SsYTlve.js";import"./Separator-DNLy0jJN.js";import"./Message-aTJ2QV4k.js";import"./MessageSeparator-l6wGhyEd.js";import"./NavigationGroup-DObyIeLm.js";import"./Notification-D5W1roVe.js";import"./NotificationProvider-DOl1AdVQ.js";import"./ProgressBar-68JDRf4g.js";import"./Rating-Cq95JU_R.js";import"./Skeleton-T4ao3t7M.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Mr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await p(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...n.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Nr as __namedExportsOrder,Mr as default};
