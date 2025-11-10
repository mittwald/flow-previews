import{j as r,r as g}from"./iframe-DVp3wyW8.js";import{u as c,F as d,t as b,c as h}from"./Form-z76jdldp.js";import{R as F,S as x}from"./ResetButton-CXg2zsDG.js";import{B as f}from"./Button-BGy_040K.js";import{S as E}from"./Section-BH2aMjN_.js";import{A as T}from"./ActionGroup-pi-cPFOK.js";import{s as u}from"./Action-K8BkEoNE.js";import{A as i,T as p,F as B,O as A}from"./Modal-BMQQV5CJ.js";import{L as l}from"./Label-CuedprOO.js";import"./index-nuYtCEEu.js";import"./dynamic-DGFrs7WZ.js";import"./flowComponent-DOD6KTqp.js";import"./index-CSWZRCbA.js";import"./clsx-B-dksMZM.js";import"./index-CnZiUiqa.js";import"./useLocalizedStringFormatter-BDNlhScJ.js";import"./context-BTkZkFrl.js";import"./browser-qRiPvlbV.js";import"./utils-CK_bkg3x.js";import"./IconWarning-btspmSaz.js";import"./Text-x2NLhZ_6.js";import"./EmulatedBoldText-CHhmc0Op.js";import"./LoadingSpinner-BvAyWbCS.js";import"./Button-ComzTzlH.js";import"./ProgressBar-BEtx-YzR.js";import"./Hidden-QjALVdSt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Drt37fC5.js";import"./useFocusable-CbEG4JhP.js";import"./Dialog-DnE7Rdfp.js";import"./RSPContexts-CQ8PUfHG.js";import"./OverlayArrow-hRB0J8f2.js";import"./useControlledState-sP_KhedU.js";import"./Collection-IUBaFxMl.js";import"./CollectionBuilder-BV2QNItK.js";import"./SelectionIndicator-BlMGsqeF.js";import"./Separator-DSxPZKK_.js";import"./getActionGroupSlot-D9iU03Oh.js";import"./useStatic-INcP8lHW.js";import"./context-DxFAQaLL.js";import"./Popover-C_VLeK4z.js";import"./OverlayTrigger-DDB1sJEU.js";import"./ControlledNotification-OITqwrQV.js";import"./ClearPropsContextView-BZK07IGP.js";import"./LayoutCard-OPTYLsJ7.js";import"./Accordion-DmoyI5os.js";import"./Alert-CEm4e_SW.js";import"./AlertIcon-C0fW6UTj.js";import"./AlertBadge-BAIY6jhD.js";import"./Align-DtfFhKHV.js";import"./TableFooterRow-BKmNXOlc.js";import"./SkeletonText-CHG5MwQd.js";import"./Avatar-BoS6ilSi.js";import"./AvatarStack-BNLqbH_5.js";import"./Badge-BuWxR8NR.js";import"./BigNumber-oP7yv34x.js";import"./Breadcrumb-nKhLYS12.js";import"./Link-CMULlE06.js";import"./Heading-VOEAcbBw.js";import"./Legend-UMI8_Va6.js";import"./FileCardList-BwROlVfd.js";import"./Image-DV3kYb9c.js";import"./CodeBlock-DLSAe4Y0.js";import"./CopyButton-Dk4qi3FQ.js";import"./Tooltip-DqV_89wM.js";import"./react-children-utilities-CabJh-Do.js";import"./Color-BHbd5l6Z.js";import"./Content-O95-U-Qr.js";import"./ContextualHelpTrigger-CYvsPez5.js";import"./CounterBadge-v39-8X0R.js";import"./DonutChart-YB1zUrit.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DtiGGgun.js";import"./Header-BCGekEHF.js";import"./Initials-B-b-7fIf.js";import"./InlineCode-BwMJAyQF.js";import"./LabeledValue-C8Tjx9pK.js";import"./PopoverTrigger-D6XGHSuv.js";import"./Markdown-BRgSnXcQ.js";import"./Separator-BYYET0Xl.js";import"./Message-CVMTOi2n.js";import"./MessageSeparator-CQIvknRP.js";import"./NavigationGroup-CspCX-8Q.js";import"./Notification-M6D_CpCT.js";import"./NotificationProvider-BN4BkdSa.js";import"./ProgressBar-BIc7ii6n.js";import"./Rating-lw9S6p8R.js";import"./Skeleton-adxwNElx.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,O=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(t=>{const e=`${o.split("@")[0]}@${t}`;return r.jsx(A,{value:e,textValue:e,children:e},e)}),pt={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),O(S)},t=c({defaultValues:{email:""}}),e=b(),j=t.watch("email");return r.jsx(d,{form:t,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(e,{name:"email",children:r.jsxs(i,{children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:o=>{const t=c();g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsxs(i,{...o,isInvalid:!0,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(e)]})]})}},s={render:o=>{const t=c(),e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const lt=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,s as WithFocus,lt as __namedExportsOrder,pt as default};
