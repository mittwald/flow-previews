import{j as r,r as j}from"./iframe-BUpOconN.js";import{u as d,F as u,t as g,a as h}from"./Form-BE9ZVYLW.js";import{B as i}from"./Button-BI2nRdMO.js";import{S as b}from"./Section-BpWTwwJh.js";import{A as E}from"./ActionGroup-DfParnZE.js";import{s as f}from"./Action-zZ74f8ZW.js";import{A as m,T as l,F as S,O as T}from"./Modal-6HiJrUaX.js";import{L as a}from"./Label-CfIUyjLz.js";import"./index-nuYtCEEu.js";import"./dynamic-BC3S0Bwc.js";import"./flowComponent-BlNboq0M.js";import"./index-DUL0RQ8a.js";import"./clsx-B-dksMZM.js";import"./index-DbC_ni2B.js";import"./useLocalizedStringFormatter-BfAN4zIg.js";import"./context-BerssnGJ.js";import"./browser-BvUtNH1Q.js";import"./utils-D0zgVK2Q.js";import"./IconWarning-BhCngq7e.js";import"./Text-BmeR1AHd.js";import"./EmulatedBoldText-BYxux4hO.js";import"./LoadingSpinner-BP3hPEk8.js";import"./Button-kwZ3-LYf.js";import"./ProgressBar-CJ9Fgy9N.js";import"./Hidden-BRxj41U4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Ctd_QOVX.js";import"./useFocusable-DIihcfGE.js";import"./Dialog-9peppKdC.js";import"./RSPContexts-DHzB_yYn.js";import"./OverlayArrow-YGRreMIm.js";import"./useControlledState-CATx7UtX.js";import"./Collection-8CZs5R9B.js";import"./CollectionBuilder-DKRji49J.js";import"./SelectionIndicator-Bv8zjct6.js";import"./Separator-C30545Sk.js";import"./getActionGroupSlot-CQ_4bzXc.js";import"./useStatic-lOwByp-V.js";import"./context-kOiZEgEs.js";import"./Popover-Ba6VttQl.js";import"./OverlayTrigger-BUfLbgE9.js";import"./ControlledNotification-CFPZ3UPn.js";import"./ClearPropsContextView-B4rUpvsn.js";import"./LayoutCard-WSxHsShP.js";import"./Accordion-DpimxwIb.js";import"./Alert-DUPmf3UR.js";import"./AlertIcon-BFFrkh8K.js";import"./AlertBadge-D6ZmWE1l.js";import"./Align-DgAAqJuR.js";import"./TableFooterRow-gq6t1pjS.js";import"./SkeletonText-Wx_Alp0s.js";import"./Avatar-hm6V4z7e.js";import"./AvatarStack-BbKdzFSM.js";import"./Badge-Btso2PJq.js";import"./BigNumber-Be6raZDD.js";import"./Breadcrumb-DROHrIdn.js";import"./Link-Drjv9HvP.js";import"./Heading-BGtG9kd2.js";import"./Legend-4qLNiKsc.js";import"./FileCardList-DzvNlTUg.js";import"./Image-DhVv3MkO.js";import"./CodeBlock-Dpf4dOWR.js";import"./CopyButton-Cu_iGNqV.js";import"./Tooltip-BcgCPXFx.js";import"./react-children-utilities-DgZ1xxml.js";import"./Color-BJtZIrG9.js";import"./Content-CxwaKG9h.js";import"./ContextualHelpTrigger-B6DAcZCV.js";import"./CounterBadge-B9utj9pH.js";import"./DonutChart-CdxGHQVf.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CqRVRiHz.js";import"./Header-CHAQ6t4H.js";import"./Initials-DyWmpGOU.js";import"./InlineCode-Bi5CJncS.js";import"./LabeledValue-DFZAKBi6.js";import"./PopoverTrigger-p8rmDyPx.js";import"./Markdown-C9_BuH0P.js";import"./Separator-XIP1-rXu.js";import"./Message-B_Y9b0L6.js";import"./MessageSeparator-5RUgA9Mv.js";import"./NavigationGroup-7iBbwWvS.js";import"./Notification-B53uF-St.js";import"./NotificationProvider-Aaxx3LqL.js";import"./ProgressBar-CzaJizZm.js";import"./Rating-C8hC5BCb.js";import"./Skeleton-RgkCN70r.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
