import{j as r,r as g}from"./iframe-BFS0V-7K.js";import{u as c,F as d,t as b,c as h}from"./Form-Cb4n6oUC.js";import{R as F,S as x}from"./ResetButton-C1ZzppC-.js";import{B as f}from"./Button-C69BF7uv.js";import{S as E}from"./Section-jBZNhjEq.js";import{A as T}from"./ActionGroup-DX0lhxHa.js";import{s as u}from"./Action-BkvOgHYi.js";import{A as i,T as p,F as B,O as A}from"./Modal-BFATeJko.js";import{L as l}from"./Label-B5VHziHb.js";import"./index-nuYtCEEu.js";import"./dynamic-D6nHDIyd.js";import"./flowComponent-DYDr2Yry.js";import"./index-BLI0rWKp.js";import"./clsx-B-dksMZM.js";import"./index-Cd8SiJSJ.js";import"./useLocalizedStringFormatter-Bsp3ptWs.js";import"./context-CL-MWO-e.js";import"./browser-DkyXecm8.js";import"./utils-pBfQtTJP.js";import"./IconWarning-BzBGzmgt.js";import"./Text-Cg-PlNpB.js";import"./EmulatedBoldText-DZMpoDwy.js";import"./LoadingSpinner-Bnd8iTGA.js";import"./Button-C0SUbguZ.js";import"./ProgressBar-DZnnPhpU.js";import"./Hidden-459sOV2x.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CM3Y5p4v.js";import"./useFocusable-DIP3xdGA.js";import"./Dialog-Cj7jIBKp.js";import"./RSPContexts-vmNR8Bdo.js";import"./OverlayArrow-BWg220ZF.js";import"./useControlledState-CfZCIixa.js";import"./Collection-BNdUYhId.js";import"./CollectionBuilder-oqPeank5.js";import"./SelectionIndicator-C95FoYBz.js";import"./Separator-DyL-chbW.js";import"./getActionGroupSlot-B8sKJhlM.js";import"./useStatic-5zK4mpNm.js";import"./context-B7YXRHOK.js";import"./Popover-CRv5SMSH.js";import"./OverlayTrigger-DB1HvpAI.js";import"./ControlledNotification-CqVYbY5l.js";import"./ClearPropsContextView-M-FcIVZm.js";import"./LayoutCard-DliVh_Cq.js";import"./Accordion-BN1AeHiU.js";import"./Alert-CkAVzfTa.js";import"./AlertIcon-BSK9BpjA.js";import"./AlertBadge--nGlaEDG.js";import"./Align-Csa9WLSq.js";import"./TableFooterRow-z-Vp4lH_.js";import"./SkeletonText-DNF0wxcf.js";import"./Avatar-DCVki-tG.js";import"./AvatarStack-dSGbniWM.js";import"./Badge-B1T0t0bU.js";import"./BigNumber-DC_XM9ko.js";import"./Breadcrumb-BmXdRJ_S.js";import"./Link-obEopwrC.js";import"./Heading-DljESEje.js";import"./Legend-BgcSabyE.js";import"./FileCardList-BLwhGj5a.js";import"./Image-4xzJyRg6.js";import"./CodeBlock-BMPK3aC9.js";import"./CopyButton-Dspux94x.js";import"./Tooltip-DdLAAoPW.js";import"./react-children-utilities-BhgYEgbL.js";import"./Color-Bkxy1GQb.js";import"./Content-CWdQm9SB.js";import"./ContextualHelpTrigger-1bZdijhA.js";import"./CounterBadge-COopACRP.js";import"./DonutChart-C1kyimoM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CGzqTGDI.js";import"./Header-r0BkDezu.js";import"./Initials-DrCrYU8v.js";import"./InlineCode-BwCrq_Tn.js";import"./LabeledValue-m8r6nqGA.js";import"./PopoverTrigger-DwJ_YWVm.js";import"./Markdown-Dlb8-Jwc.js";import"./Separator-DMn5BSHW.js";import"./Message-BUhJcMSM.js";import"./MessageSeparator-Jfq9TQuP.js";import"./NavigationGroup-YgTh9AiK.js";import"./Notification-DVeBahUP.js";import"./NotificationProvider-CODhhIwr.js";import"./ProgressBar-CxCN6ejE.js";import"./Rating-CTf8YM4g.js";import"./Skeleton-f-vyEhot.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,O=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(t=>{const e=`${o.split("@")[0]}@${t}`;return r.jsx(A,{value:e,textValue:e,children:e},e)}),pt={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),O(S)},t=c({defaultValues:{email:""}}),e=b(),j=t.watch("email");return r.jsx(d,{form:t,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(e,{name:"email",children:r.jsxs(i,{children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:o=>{const t=c();g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsxs(i,{...o,isInvalid:!0,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(e)]})]})}},s={render:o=>{const t=c(),e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
