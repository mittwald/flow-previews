import{j as r,r as j}from"./iframe-CRkLAjqu.js";import{u as d,F as u,t as g,a as h}from"./Form-BNYc2K94.js";import{B as i}from"./Button-iYH795Vf.js";import{S as b}from"./Section-BqZCPeF5.js";import{A as E}from"./ActionGroup-BFn71X1Q.js";import{s as f}from"./Action-BsqGwbaj.js";import{A as m,T as l,F as S,O as T}from"./Modal-Bi24_mKy.js";import{L as a}from"./Label-CvxcI9N1.js";import"./index-nuYtCEEu.js";import"./dynamic-C-Z2ndaa.js";import"./flowComponent-DkSEV7yV.js";import"./index-DwXT3Bgk.js";import"./clsx-B-dksMZM.js";import"./index-CMjPCm5R.js";import"./useLocalizedStringFormatter-lA2Sw6DW.js";import"./context-DLoU3qmJ.js";import"./browser-C4srWScu.js";import"./utils-BtHHKbwG.js";import"./IconWarning-4dYG6Emm.js";import"./Text-SnGLDLtK.js";import"./EmulatedBoldText-UBCiYBJN.js";import"./LoadingSpinner-DRDb2q6e.js";import"./Button-CPrLpUny.js";import"./ProgressBar-N5kov_o0.js";import"./Hidden-PDlBagOD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-PsHB6P7A.js";import"./useFocusable-ybZYv2TC.js";import"./Dialog-aAfd-0c1.js";import"./RSPContexts-Bb59CEQZ.js";import"./OverlayArrow-CxWIXwnM.js";import"./useControlledState-6rabR8D5.js";import"./Collection-B5dOcGsH.js";import"./CollectionBuilder-uHK_yZ9p.js";import"./SelectionIndicator-CTOSa6og.js";import"./Separator-ARlWDSvP.js";import"./getActionGroupSlot-D4mouN9v.js";import"./useStatic-CAsZlBox.js";import"./context-B-s8oBfA.js";import"./Popover-JmyjzJuR.js";import"./OverlayTrigger-8Ptq7Mev.js";import"./ControlledNotification-D2TmofCz.js";import"./ClearPropsContextView-C5LrpGQW.js";import"./LayoutCard-CjdwpB7h.js";import"./Accordion-ClEYPWkh.js";import"./Alert-P7MV_jtv.js";import"./AlertIcon-pJx2ML-T.js";import"./AlertBadge-CVYh_HdZ.js";import"./Align-Do9EmKaA.js";import"./TableFooterRow-C9_irqle.js";import"./SkeletonText-TVqlyhy4.js";import"./Avatar-CM3dbqm8.js";import"./AvatarStack-B8z7c5R-.js";import"./Badge-21AXCBg-.js";import"./BigNumber-DfUNeOzh.js";import"./Breadcrumb-BS8Lt9IY.js";import"./Link-Bw_LfIEu.js";import"./Heading-y35Y4q5x.js";import"./Legend-f_DtJubJ.js";import"./FileCardList-BMd6bLKO.js";import"./Image-BedWGGF1.js";import"./CodeBlock-C2vrlOIH.js";import"./CopyButton-BigcnsSL.js";import"./Tooltip-BKVABRbd.js";import"./react-children-utilities-DrPwd9RA.js";import"./Color-C03W6dEE.js";import"./Content-RElVSMrp.js";import"./ContextualHelpTrigger-Dp6H1ZMR.js";import"./CounterBadge-BnlKefE7.js";import"./DonutChart-BO_WhV9B.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DRURjWVs.js";import"./Header-FG4VMbdE.js";import"./Initials-DJ-D-vED.js";import"./InlineCode-Tzhzu6PC.js";import"./LabeledValue-a7txHIua.js";import"./PopoverTrigger-BZFX4_wd.js";import"./Markdown-7wMzE-35.js";import"./Separator-BVax_g_I.js";import"./Message-C7VfP3LJ.js";import"./MessageSeparator-iWd5-cu6.js";import"./NavigationGroup-DT01Utp1.js";import"./Notification-Cmaq8QdB.js";import"./NotificationProvider-CCZjyPrZ.js";import"./ProgressBar-Bgc3cD6n.js";import"./Rating-Cicu1Jno.js";import"./Skeleton-DtNrP5cT.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
