import{j as r,r as j}from"./iframe-Cn_Uksv1.js";import{u as d,F as u,t as g,a as h}from"./Form-BouB72Lx.js";import{B as i}from"./Button-uqtApCO2.js";import{S as b}from"./Section-Wl51SmLg.js";import{A as E}from"./ActionGroup-UNAE9QI0.js";import{s as f}from"./Action-Drtylt4n.js";import{A as m,T as l,F as S,O as T}from"./Modal-VdyORwMb.js";import{L as a}from"./Label-C9VVl4IH.js";import"./index-nuYtCEEu.js";import"./dynamic-DNsdEAu1.js";import"./flowComponent-CoFR225t.js";import"./index-BOejRIbk.js";import"./clsx-B-dksMZM.js";import"./index-C0zdnCAL.js";import"./useLocalizedStringFormatter-m-f5OqYO.js";import"./context-B2OLF-YE.js";import"./browser-BnRg_GS1.js";import"./utils-B-f9gd93.js";import"./IconWarning-ktzgJVul.js";import"./Text-D6EVKQHX.js";import"./EmulatedBoldText-CxLJaoXr.js";import"./LoadingSpinner-DSg47w65.js";import"./Button-FEoS725w.js";import"./ProgressBar-DsWps5dj.js";import"./Hidden-BL9AL94n.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DLygjq4p.js";import"./useFocusable-DAjGW8_c.js";import"./Dialog-BecCL6sR.js";import"./RSPContexts-CKwSRM_H.js";import"./OverlayArrow-xQHCsek7.js";import"./useControlledState-CW1MTAna.js";import"./Collection-ClRJO0M5.js";import"./CollectionBuilder-Bhf_01Mr.js";import"./SelectionIndicator-BiXza4Fo.js";import"./Separator-Czf3nTWx.js";import"./getActionGroupSlot-DY0CPGpV.js";import"./useStatic-CJPRi5oj.js";import"./context-CovFRnRg.js";import"./Popover-BR7oC1fO.js";import"./OverlayTrigger-iBRYVjfO.js";import"./ControlledNotification-BeDY2vKU.js";import"./ClearPropsContextView-B_X2v-Sq.js";import"./LayoutCard-CnUuE-1Z.js";import"./Accordion-CZOJUgpS.js";import"./Alert-CTEBmpK4.js";import"./AlertIcon-CsVXI5gr.js";import"./AlertBadge-Cqo-ZUqC.js";import"./Align-C99zP5zH.js";import"./TableFooterRow-D7KaNElw.js";import"./SkeletonText--uxcbsgM.js";import"./Avatar-BYg_-pGm.js";import"./AvatarStack-CchM2Sa3.js";import"./Badge-FQIiNSgZ.js";import"./BigNumber-BiO-khFa.js";import"./Breadcrumb-jsxr0YSU.js";import"./Link-BSO-Q76I.js";import"./Heading-BQmLpAQ1.js";import"./Legend-CKKuec6M.js";import"./FileCardList-CWlzLJsp.js";import"./Image-B9TyEKdz.js";import"./CodeBlock-BYR6_BW4.js";import"./CopyButton-CNQL36Ag.js";import"./Tooltip-BL0AsMEX.js";import"./react-children-utilities-Dr4OQwAJ.js";import"./Color-BM5aIGcO.js";import"./Content-BOlga6nV.js";import"./ContextualHelpTrigger-CAXIcL_u.js";import"./CounterBadge-CquLVsgM.js";import"./DonutChart-CWSX7F77.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CB4FWWnG.js";import"./Header-tJ9N4XyQ.js";import"./Initials-Dx1k9kiG.js";import"./InlineCode-B-Ansa8I.js";import"./LabeledValue-DojwK0XU.js";import"./PopoverTrigger-BOxfrCz3.js";import"./Markdown-BXYLh3og.js";import"./Separator-Jbtv09Vv.js";import"./Message-DAWPZvq-.js";import"./MessageSeparator-CphE32Oc.js";import"./NavigationGroup-CQG91l3o.js";import"./Notification-CWiXAQpu.js";import"./NotificationProvider-C78MS0MB.js";import"./ProgressBar-CW2dYXPc.js";import"./Rating-pCHc-nBc.js";import"./Skeleton-BIPAf7cq.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
