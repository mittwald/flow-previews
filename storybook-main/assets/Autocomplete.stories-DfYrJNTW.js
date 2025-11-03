import{j as r,r as j}from"./iframe-Bx5EipPE.js";import{u as d,F as u,t as g,a as h}from"./Form-BnshVL_Q.js";import{B as i}from"./Button-CFmBk-Ho.js";import{S as b}from"./Section-DvWWmWm_.js";import{A as E}from"./ActionGroup-No0FdeaF.js";import{s as f}from"./Action-D66DYP5N.js";import{A as m,T as l,F as S,O as T}from"./Modal-DjbUmKIN.js";import{L as a}from"./Label-BvwZD5Eb.js";import"./index-nuYtCEEu.js";import"./dynamic-DMwV73o9.js";import"./flowComponent-DV1r5tPv.js";import"./index-13Ss2Q1C.js";import"./clsx-B-dksMZM.js";import"./index-B2U9nMUa.js";import"./useLocalizedStringFormatter-2_Ttu7_B.js";import"./context-CiBo84na.js";import"./browser-YP_S1MMX.js";import"./utils-CqLTISaK.js";import"./IconWarning-sXt69lXW.js";import"./Text-cL2QlUTP.js";import"./EmulatedBoldText-DBVghW6y.js";import"./LoadingSpinner-BBcen_x5.js";import"./Button-CMS0XqzI.js";import"./ProgressBar-CLZ_h9h8.js";import"./Hidden-DlcLHRCE.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B-aBTfr6.js";import"./useFocusable-C9Y_kWrv.js";import"./Dialog-iL1jHTNr.js";import"./RSPContexts-ByW7h33h.js";import"./OverlayArrow-DDi9NGvK.js";import"./useControlledState-DARDYAMl.js";import"./Collection-BHn5eDKP.js";import"./CollectionBuilder-cxVcyhpe.js";import"./SelectionIndicator-MBSA8IqZ.js";import"./Separator-CJ9-vZHB.js";import"./getActionGroupSlot-B1Q5BOiy.js";import"./useStatic-BSnv9Wf7.js";import"./context-mT0U7naa.js";import"./Popover-iFb4HmrW.js";import"./OverlayTrigger-CtLRnD7V.js";import"./ControlledNotification-BIugGNxy.js";import"./ClearPropsContextView-Cv4XWBgA.js";import"./LayoutCard-sMcferaL.js";import"./Accordion-DmTD0R0Y.js";import"./Alert-DWOWH2LA.js";import"./AlertIcon-DV0ec5yj.js";import"./AlertBadge-BwMmDr9n.js";import"./Align-BTFCqDEW.js";import"./TableFooterRow-DVDcT3e4.js";import"./SkeletonText-CvOIMsNd.js";import"./Avatar-BbydMM9a.js";import"./AvatarStack-sAUaD8vE.js";import"./Badge-BTvmzEPQ.js";import"./BigNumber-CC1pbU8C.js";import"./Breadcrumb-DgZgPTJv.js";import"./Link-C2LG0YAc.js";import"./Heading-DhAPxMie.js";import"./Legend-D_PiYtz_.js";import"./FileCardList-BIFG4rII.js";import"./Image-Gea1ZpcM.js";import"./CodeBlock-D1_fjXpw.js";import"./CopyButton-B3VIC-Kt.js";import"./Tooltip-CNvRcV1e.js";import"./react-children-utilities-DjBlfejv.js";import"./Color-BAClko0e.js";import"./Content-BPEEMkM8.js";import"./ContextualHelpTrigger-C9p_kpwL.js";import"./CounterBadge-PTDzzWJN.js";import"./DonutChart-DYYf8Fww.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DHZoePPN.js";import"./Header-Bex9_Xed.js";import"./Initials-qgg-p_0J.js";import"./InlineCode-CAAK-Hr2.js";import"./LabeledValue-Csrm71fe.js";import"./PopoverTrigger-rUkUK7-J.js";import"./Markdown-71TJHhxg.js";import"./Separator-CnG4MZcN.js";import"./Message-Bokpl9Ee.js";import"./MessageSeparator-CKVniD8U.js";import"./NavigationGroup-BvitlAKA.js";import"./Notification-CGSW0KyE.js";import"./NotificationProvider-jZGeYcdw.js";import"./ProgressBar-DdWEGT_H.js";import"./Rating-IN0owOnk.js";import"./Skeleton-CqqMkjPZ.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
