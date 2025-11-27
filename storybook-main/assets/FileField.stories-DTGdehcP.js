import{j as r,r as x}from"./iframe-CAXopRTx.js";import{b as l,u as a,F as c,t as j}from"./Form-MlTWLio9.js";import{L as s}from"./Label-Cxhs4ZYP.js";import{R as u,S as d}from"./ResetButton-DG3gYnEo.js";import{B as t}from"./Button-Ctv-dB52.js";import{S,s as p}from"./Section-DhxlZfa0.js";import{A as b}from"./ActionGroup-DKCSrD6Z.js";import{q as m,g as B}from"./TimeField-AvIAec-n.js";import"./index-nuYtCEEu.js";import"./dynamic-D21vqi9G.js";import"./PropsContextProvider-BV-EFtmJ.js";import"./mergeRefs-C_4KEy1o.js";import"./index-9z8TnNhf.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-0XeO7SJn.js";import"./context-NOf08-wC.js";import"./browser-Byp0bOe_.js";import"./utils-Dzmr5ZRW.js";import"./ProgressBar-Dw7oROZh.js";import"./Hidden-DOod4g1Z.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CZAvow1a.js";import"./Text-BF5hWH0r.js";import"./EmulatedBoldText-DePsUjt1.js";import"./LoadingSpinner-CoC4LtwE.js";import"./Button-Chz2mIUC.js";import"./useFocusRing-DTLGJlTA.js";import"./useFocusable-CGAuhRwL.js";import"./context-B6djjyHK.js";import"./RSPContexts-BuWbS9Uz.js";import"./Collection-Bc328CGA.js";import"./CollectionBuilder-TpkYGVLd.js";import"./SelectionIndicator-dypojMNo.js";import"./Separator-BMVIHcHI.js";import"./useStatic-B1gRKxid.js";import"./Accordion-BN6dZ4oC.js";import"./Alert-BmpR03pc.js";import"./AlertIcon-CPsr1mMB.js";import"./AlertBadge-DFIj-iNs.js";import"./Align-B2qDxo9l.js";import"./Popover-Tc25RGFF.js";import"./OverlayTrigger-Bjc5GfEu.js";import"./TableFooterRow-BQ4TOCow.js";import"./SkeletonText-B_tzDs56.js";import"./Avatar-DLDydU_T.js";import"./AvatarStack-DUfYWTId.js";import"./Badge-BFCmhw44.js";import"./BigNumber-Cyz0DTSh.js";import"./Breadcrumb-C1rkvIvu.js";import"./Link-D9RFi070.js";import"./Heading-kGKtBlX4.js";import"./Legend-BJ6Ck0Hy.js";import"./FileCardList-CpJRlD7z.js";import"./Image-DfNgiqKc.js";import"./Color-B5km2NmY.js";import"./Content-BXyxWnVJ.js";import"./ContextualHelpTrigger-Dj6mrcgU.js";import"./CounterBadge-BL38auu8.js";import"./DonutChart-CcFbTUD3.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Be_vBexi.js";import"./Header-BScDeb9f.js";import"./Initials-W36NzcvX.js";import"./InlineCode-CkLg5Zr5.js";import"./PopoverTrigger-Dqa8sMRl.js";import"./Separator-DxMsHozP.js";import"./Message-7lyTqTqh.js";import"./MessageSeparator-CQ1CLCTT.js";import"./NavigationGroup-C4JnuN_r.js";import"./Notification-Dq2Soo6r.js";import"./NotificationProvider-BPY70jq3.js";import"./ProgressBar-r_4SSeaH.js";import"./Rating-B9iG1IJI.js";import"./Skeleton-Dmrl1knY.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Mr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await p(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
