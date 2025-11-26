import{j as r,r as S}from"./iframe-BZ309vyP.js";import{b as n,u as p,F as a,t as x}from"./Form-B3YyVIIh.js";import{L as m}from"./Label-DaB9u04W.js";import{R as u,S as l}from"./ResetButton-DiyKUpBb.js";import{B as d}from"./Button-D_IowAzf.js";import{S as j,s as c}from"./Section-8HxUyc4l.js";import{A as b}from"./ActionGroup-DcCFpoHe.js";import{d as s,g as E}from"./TimeField-XG7fVuks.js";import"./index-nuYtCEEu.js";import"./dynamic-BlbD8p9A.js";import"./PropsContextProvider-P_wGPXL3.js";import"./mergeRefs-DOKtgXIl.js";import"./index-D_qUUaJn.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-D2Npicej.js";import"./context-B2ssQm4M.js";import"./browser-6QOIIU7n.js";import"./utils-JyFk5TTa.js";import"./ProgressBar-BUFkxRcJ.js";import"./Hidden-Dy-Kvk-F.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DvQ_83sT.js";import"./Text-C4LG1QU9.js";import"./EmulatedBoldText-BN5KbGVs.js";import"./LoadingSpinner-CP4vAouS.js";import"./Button-CF0FSAUf.js";import"./useFocusRing-BtfZpnq2.js";import"./useFocusable-CnzH4q2c.js";import"./context-DqVMPo4j.js";import"./RSPContexts-CvJVTBp5.js";import"./Collection-Jfb5Oz2B.js";import"./CollectionBuilder-BxUVDWC-.js";import"./SelectionIndicator-B3TjwCoM.js";import"./Separator-Dgou7g2f.js";import"./useStatic-5dWEA-L1.js";import"./Accordion-DBJYoG6f.js";import"./Alert-DPsJkmhp.js";import"./AlertIcon-B-mY0RH1.js";import"./AlertBadge-R-mVKmEC.js";import"./Align-DS4_04QJ.js";import"./Popover-X1T8rxjL.js";import"./OverlayTrigger-D_yTwUd7.js";import"./TableFooterRow-CiOqHLtA.js";import"./SkeletonText-DFDkwTxU.js";import"./Avatar-B3lmaioZ.js";import"./AvatarStack-BG3RCwzr.js";import"./Badge--3MWN732.js";import"./BigNumber-BkKE9hXG.js";import"./Breadcrumb-B7PRg9RF.js";import"./Link-m-wa_u5M.js";import"./Heading-BsbQC_AI.js";import"./Legend-C53VbU31.js";import"./FileCardList-Uss-bJOP.js";import"./Image-K3vcbe26.js";import"./Color-DAFsRmWC.js";import"./Content-BkJWB-QG.js";import"./ContextualHelpTrigger-CvFvqIHG.js";import"./CounterBadge-FgsOg61J.js";import"./DonutChart-Cgkf9wPz.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DQqFYPly.js";import"./Header-_hwWlC9P.js";import"./Initials-CtNkodNC.js";import"./InlineCode-Dinyx0TJ.js";import"./PopoverTrigger-fvbDiyfk.js";import"./Separator-n_z7rKib.js";import"./Message-D2YQcln4.js";import"./MessageSeparator-DajKPYBq.js";import"./NavigationGroup-DO1RxFBf.js";import"./Notification-B0QimcaP.js";import"./NotificationProvider-CEg6afiq.js";import"./ProgressBar-DGfkaPcD.js";import"./Rating-BTXRmieV.js";import"./Skeleton-WCVj9B_-.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Nr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),B(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Ur as __namedExportsOrder,Nr as default};
