import{j as r,r as S}from"./iframe-CAXopRTx.js";import{u as c,F as d,t as b,b as h}from"./Form-MlTWLio9.js";import{R as F,S as x}from"./ResetButton-DG3gYnEo.js";import{B as f}from"./Button-Ctv-dB52.js";import{S as E,s as u}from"./Section-DhxlZfa0.js";import{A as T}from"./ActionGroup-DKCSrD6Z.js";import{c as i,T as l,g as B,O as y}from"./TimeField-AvIAec-n.js";import{L as p}from"./Label-Cxhs4ZYP.js";import"./index-nuYtCEEu.js";import"./dynamic-D21vqi9G.js";import"./PropsContextProvider-BV-EFtmJ.js";import"./mergeRefs-C_4KEy1o.js";import"./index-9z8TnNhf.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-0XeO7SJn.js";import"./context-NOf08-wC.js";import"./browser-Byp0bOe_.js";import"./utils-Dzmr5ZRW.js";import"./IconWarning-CZAvow1a.js";import"./Text-BF5hWH0r.js";import"./EmulatedBoldText-DePsUjt1.js";import"./LoadingSpinner-CoC4LtwE.js";import"./Button-Chz2mIUC.js";import"./ProgressBar-Dw7oROZh.js";import"./Hidden-DOod4g1Z.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DTLGJlTA.js";import"./useFocusable-CGAuhRwL.js";import"./context-B6djjyHK.js";import"./RSPContexts-BuWbS9Uz.js";import"./Collection-Bc328CGA.js";import"./CollectionBuilder-TpkYGVLd.js";import"./SelectionIndicator-dypojMNo.js";import"./Separator-BMVIHcHI.js";import"./useStatic-B1gRKxid.js";import"./Accordion-BN6dZ4oC.js";import"./Alert-BmpR03pc.js";import"./AlertIcon-CPsr1mMB.js";import"./AlertBadge-DFIj-iNs.js";import"./Align-B2qDxo9l.js";import"./Popover-Tc25RGFF.js";import"./OverlayTrigger-Bjc5GfEu.js";import"./TableFooterRow-BQ4TOCow.js";import"./SkeletonText-B_tzDs56.js";import"./Avatar-DLDydU_T.js";import"./AvatarStack-DUfYWTId.js";import"./Badge-BFCmhw44.js";import"./BigNumber-Cyz0DTSh.js";import"./Breadcrumb-C1rkvIvu.js";import"./Link-D9RFi070.js";import"./Heading-kGKtBlX4.js";import"./Legend-BJ6Ck0Hy.js";import"./FileCardList-CpJRlD7z.js";import"./Image-DfNgiqKc.js";import"./Color-B5km2NmY.js";import"./Content-BXyxWnVJ.js";import"./ContextualHelpTrigger-Dj6mrcgU.js";import"./CounterBadge-BL38auu8.js";import"./DonutChart-CcFbTUD3.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Be_vBexi.js";import"./Header-BScDeb9f.js";import"./Initials-W36NzcvX.js";import"./InlineCode-CkLg5Zr5.js";import"./PopoverTrigger-Dqa8sMRl.js";import"./Separator-DxMsHozP.js";import"./Message-7lyTqTqh.js";import"./MessageSeparator-CQ1CLCTT.js";import"./NavigationGroup-C4JnuN_r.js";import"./Notification-Dq2Soo6r.js";import"./NotificationProvider-BPY70jq3.js";import"./ProgressBar-r_4SSeaH.js";import"./Rating-B9iG1IJI.js";import"./Skeleton-Dmrl1knY.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,w=A("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(y,{value:t,textValue:t,children:t},t)}),Yr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async g=>{await u(1500),w(g)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,zr as __namedExportsOrder,Yr as default};
