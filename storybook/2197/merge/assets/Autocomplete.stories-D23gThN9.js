import{j as r,r as S}from"./iframe-BDeBfZSP.js";import{u as c,F as d,t as b,b as h}from"./Form-D-Maj7Xx.js";import{R as F,S as x}from"./ResetButton-CS1V5Fjr.js";import{B as f}from"./Button-Dbhe5AA0.js";import{S as E,s as u}from"./Section-D09FbpBR.js";import{A as T}from"./ActionGroup-BjwLyGgZ.js";import{c as i,T as l,g as B,O as y}from"./TimeField-Ne-c5KEy.js";import{L as p}from"./Label-B1LspQ1T.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BIVuw2Q_.js";import"./PropsContextProvider-CInYH9Sb.js";import"./mergeRefs-Dw41Nq7Z.js";import"./index-CAU0MqbG.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-QrEcyOeW.js";import"./context-CmX5Cpay.js";import"./browser--C_mCO56.js";import"./utils-Byz_563U.js";import"./IconWarning-CWBVghBS.js";import"./Text-DwrK8QpO.js";import"./EmulatedBoldText-3F_0W9mf.js";import"./LoadingSpinner-BWJul6BV.js";import"./Button-Cfa7dut0.js";import"./ProgressBar-W0aWvyTc.js";import"./Hidden-D2v2aeTK.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-508WtmVR.js";import"./useFocusable-DTnDWSdy.js";import"./context-DWFXzaDB.js";import"./RSPContexts-BBQghKHL.js";import"./Collection-l4IMJ13J.js";import"./CollectionBuilder-CCh6UYnS.js";import"./SelectionIndicator-uDzrcrA1.js";import"./Separator-mHu8Ln7W.js";import"./useStatic-CE8Y1Vmb.js";import"./Accordion-CKUe20wM.js";import"./Alert-CPr2bDJb.js";import"./AlertIcon-CVet0SZ9.js";import"./AlertBadge-rZGJwZqq.js";import"./Align-Bqyqg49a.js";import"./Popover-DNzPOg2i.js";import"./OverlayTrigger-C0iwpCUS.js";import"./TableFooterRow-2U0_8Mem.js";import"./SkeletonText-BtXDjmAi.js";import"./Avatar-D2htOkNN.js";import"./AvatarStack-1PEAciH2.js";import"./Badge-KSMEjVCc.js";import"./BigNumber-BBSlAdO3.js";import"./Breadcrumb-B8GN1fPd.js";import"./Link-Bw9pb0v5.js";import"./Heading-iyX9InFB.js";import"./Legend-BNJwDcp9.js";import"./FileCardList-BChVNWmo.js";import"./Image-3Q6tO5T-.js";import"./Color-C5PdvckB.js";import"./Content-BA1XxLMk.js";import"./ContextualHelpTrigger-BB5lI167.js";import"./CounterBadge-ClD-eDBX.js";import"./DonutChart-irBs7pBN.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-JTtbrcXh.js";import"./Header-CGMIJvRh.js";import"./Initials-CKWxINwR.js";import"./InlineCode-D_o1vB8f.js";import"./PopoverTrigger-GXKodTVP.js";import"./Separator-B12pwKUV.js";import"./Message-Ct2DG7ID.js";import"./MessageSeparator-xtwtWMZH.js";import"./NavigationGroup-D4eFLegf.js";import"./Notification-lKPeWo9E.js";import"./NotificationProvider-sogPUx6w.js";import"./ProgressBar-CSjgGiiD.js";import"./Rating-FVo5ZswU.js";import"./Skeleton-CCjm6q3C.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,w=A("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(y,{value:t,textValue:t,children:t},t)}),Yr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async g=>{await u(1500),w(g)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
