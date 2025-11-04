import{j as r,r as j}from"./iframe-Dy6b_FCP.js";import{u as d,F as u,t as g,a as h}from"./Form-CrjAohdJ.js";import{B as i}from"./Button-GOXJIQJf.js";import{S as b}from"./Section-XrcD6Nxo.js";import{A as E}from"./ActionGroup-B4jkAi-7.js";import{s as f}from"./Action-De2-hlac.js";import{A as m,T as l,F as S,O as T}from"./Modal-gqzL9_9r.js";import{L as a}from"./Label-CBzLnh7v.js";import"./index-nuYtCEEu.js";import"./dynamic-BsH-tVs9.js";import"./flowComponent-DrrEN2JN.js";import"./index-CVEy0Z38.js";import"./clsx-B-dksMZM.js";import"./index-DfVSRZN_.js";import"./useLocalizedStringFormatter-IeR6u1dk.js";import"./context-Cmxdn71P.js";import"./browser-B3C2hSkY.js";import"./utils-Dr97TsDg.js";import"./IconWarning-DNcE7GB8.js";import"./Text-1cPTkrsR.js";import"./EmulatedBoldText-rn83c_he.js";import"./LoadingSpinner-CtFn_aG9.js";import"./Button-D4hzfdEM.js";import"./ProgressBar-BRblqXhL.js";import"./Hidden-CO8a8gup.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DcnqUpu3.js";import"./useFocusable-CceqWekp.js";import"./Dialog-Bnl9MCT0.js";import"./RSPContexts-BxpxaOEB.js";import"./OverlayArrow-DfWLFrq7.js";import"./useControlledState-DcQuzcMp.js";import"./Collection-BUtQOrwA.js";import"./CollectionBuilder-DjGCLM2W.js";import"./SelectionIndicator-BJWp2zfX.js";import"./Separator-CCSnrMIk.js";import"./getActionGroupSlot-DwP1pd0G.js";import"./useStatic-BBN1iEfx.js";import"./context-BJDivKIs.js";import"./Popover-CYz6FA1w.js";import"./OverlayTrigger-GliMoFGI.js";import"./ControlledNotification-DVFBubHe.js";import"./ClearPropsContextView-byuDiYQD.js";import"./LayoutCard-CwfF4o19.js";import"./Accordion-CiMwSvoa.js";import"./Alert-CwCqGima.js";import"./AlertIcon-Bz-v7qCT.js";import"./AlertBadge-BE7koL5m.js";import"./Align-mw_wA5KG.js";import"./TableFooterRow-TV_fK58V.js";import"./SkeletonText-BBWTzEMu.js";import"./Avatar-BhkC8dli.js";import"./AvatarStack-urV8mTNT.js";import"./Badge-CwqJN_-7.js";import"./BigNumber-BpYUy1_H.js";import"./Breadcrumb-BKhGqzKn.js";import"./Link-Dm_YWPlU.js";import"./Heading-BfvZKiwZ.js";import"./Legend-RNcg6gZr.js";import"./FileCardList-CuULQ1z3.js";import"./Image-D9YBJNVx.js";import"./CodeBlock-DIwxmp-o.js";import"./CopyButton-CrCq5S1w.js";import"./Tooltip-DqLEYtbU.js";import"./react-children-utilities-CRL_nrRH.js";import"./Color-C2xqPKdr.js";import"./Content-Cr1BNqiG.js";import"./ContextualHelpTrigger-BooDiSla.js";import"./CounterBadge-DCZIrYDB.js";import"./DonutChart-CGuu04ru.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DszUNJgu.js";import"./Header-BZFY0fUC.js";import"./Initials-BGK5Hpjk.js";import"./InlineCode-BOUqVp2K.js";import"./LabeledValue-DQaIwsFI.js";import"./PopoverTrigger-CmSa_lF0.js";import"./Markdown-fw0u330b.js";import"./Separator-DsvXQo1a.js";import"./Message-CaZXLGar.js";import"./MessageSeparator-BYyoFQz4.js";import"./NavigationGroup-B-SIoUNF.js";import"./Notification-Bngipq1y.js";import"./NotificationProvider-TpCCLKQR.js";import"./ProgressBar-C5FuYpoc.js";import"./Rating-BjdUQ8sK.js";import"./Skeleton-BV2ueM2i.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <Autocomplete {...props} isInvalid>
          <TextField>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const se=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,p as WithFocus,se as __namedExportsOrder,me as default};
