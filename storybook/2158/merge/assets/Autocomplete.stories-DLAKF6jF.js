import{j as r,r as S}from"./iframe-BULoVSu-.js";import{u as c,F as d,t as b,b as h}from"./Form-BHs9YWf-.js";import{R as F,S as x}from"./ResetButton-DLtgrkVV.js";import{B as f}from"./Button-DvOPlqIW.js";import{S as E,s as u}from"./Section-dZ6T0Qjb.js";import{A as T}from"./ActionGroup-CdzBskC5.js";import{c as i,T as l,g as B,O as y}from"./TimeField-1hPaxYRS.js";import{L as p}from"./Label-DWCkXaJt.js";import"./index-nuYtCEEu.js";import"./dynamic-D5pGRiRC.js";import"./PropsContextProvider-BPIZn01x.js";import"./mergeRefs-CEsjPslJ.js";import"./index-DQ_hsp85.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CNoz61n8.js";import"./context-BQ6yD6Hs.js";import"./browser-CQOPH7Oy.js";import"./utils-BZ7EFgdg.js";import"./IconWarning-DrICVJv-.js";import"./Text-Bg3HcGTD.js";import"./EmulatedBoldText-CVrOLZNg.js";import"./LoadingSpinner-BfUy7fQr.js";import"./Button-DWJqXgIw.js";import"./ProgressBar-CiVynXjH.js";import"./Hidden-C5LzDjRJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-qHICYkG6.js";import"./useFocusable-BJ4RiU3A.js";import"./context-DrExWdfs.js";import"./RSPContexts-DiGug6wA.js";import"./Collection-BGk_QoAN.js";import"./CollectionBuilder-CYT9SihX.js";import"./SelectionIndicator-DElX2Ml7.js";import"./Separator-CFtgJiRb.js";import"./useStatic-Dyq_KzQP.js";import"./Accordion-8FTg--rA.js";import"./Alert-DYZY0TL2.js";import"./AlertIcon-BlR5z9QA.js";import"./AlertBadge-DH8Oxe-N.js";import"./Align-B4QMXwt_.js";import"./Popover-CjClCujz.js";import"./OverlayTrigger-vU2Qjf7N.js";import"./TableFooterRow-BPCO49YC.js";import"./SkeletonText-BTeejoSt.js";import"./Avatar-BfIiybJY.js";import"./AvatarStack-BxKBxtVU.js";import"./Badge-CAMn07m4.js";import"./BigNumber-rg1cxAc2.js";import"./Breadcrumb-CYVN-SjU.js";import"./Link-KCtn6aUA.js";import"./Heading-Ds4iBrHb.js";import"./Legend-DReYAr9-.js";import"./FileCardList-CKSx-0eT.js";import"./Image-DNEKXGy_.js";import"./Color-DizN4J9h.js";import"./Content-DA44jWO0.js";import"./ContextualHelpTrigger-Cq74vnwF.js";import"./CounterBadge-DqN2lUJ6.js";import"./DonutChart-ByHy_tf4.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BPxmEpFw.js";import"./Header-C-kaAsvR.js";import"./Initials-DzoATSJF.js";import"./InlineCode-CLVrphJo.js";import"./PopoverTrigger-CK-Br2ii.js";import"./Separator-D_J1GVIS.js";import"./Message-Cj4eSaLV.js";import"./MessageSeparator-BKcuFd8P.js";import"./NavigationGroup-BLC2he0l.js";import"./Notification-CPfWjlNe.js";import"./NotificationProvider-CF_1VnvW.js";import"./ProgressBar-C-I_U1Y0.js";import"./Rating-dHI8nJ9_.js";import"./Skeleton-ZxO1W6TI.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,w=A("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(y,{value:t,textValue:t,children:t},t)}),Yr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async g=>{await u(1500),w(g)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
