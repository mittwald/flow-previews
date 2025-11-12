import{j as r,r as g}from"./iframe-DvmgUBW7.js";import{u as c,F as d,t as b,c as h}from"./Form-Be6_vAGT.js";import{R as F,S as x}from"./ResetButton-BIkeRNYY.js";import{B as f}from"./Button-C1BHOQWK.js";import{S as E}from"./Section-F_cOrMuH.js";import{A as T}from"./ActionGroup-CjT6ddTh.js";import{s as u}from"./Action-BYpc3qQh.js";import{A as i,T as p,F as B,O as A}from"./Modal-BweRSuC9.js";import{L as l}from"./Label-Ga4tjpL7.js";import"./index-nuYtCEEu.js";import"./dynamic-BrPxZX7i.js";import"./flowComponent-iNmw-pXL.js";import"./index-CaPeyytj.js";import"./clsx-B-dksMZM.js";import"./index-BNqf21ov.js";import"./useLocalizedStringFormatter-xkNVf5KH.js";import"./context-DzqJJy5k.js";import"./browser-DnTWaRxE.js";import"./utils-BtCbht9n.js";import"./IconWarning-Dv-oLMD9.js";import"./Text-Dbew3mLe.js";import"./EmulatedBoldText-xJj6r1Ey.js";import"./LoadingSpinner-DLZner8z.js";import"./Button-mFUbi7ER.js";import"./ProgressBar-CrOV3NyN.js";import"./Hidden-9CBDywx2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BavcHLfj.js";import"./useFocusable-CKxgRqhR.js";import"./Dialog-BHVsz8CY.js";import"./RSPContexts-DdvBd_E1.js";import"./OverlayArrow-DmicGHSR.js";import"./useControlledState-7pcPESrW.js";import"./Collection-BxeXiNok.js";import"./CollectionBuilder-DyXjZa--.js";import"./SelectionIndicator-C5hL4auF.js";import"./Separator-5Yj5luET.js";import"./getActionGroupSlot-BfXlTAt-.js";import"./useStatic-Jt5HUTTZ.js";import"./context-BiUxtsr9.js";import"./Popover-CeOTq_Ov.js";import"./OverlayTrigger-BwLKLDhB.js";import"./ControlledNotification-Bo0kmDiq.js";import"./ClearPropsContextView-DIwnN3mE.js";import"./LayoutCard-De6QAXpE.js";import"./Accordion-Dh5CbxOd.js";import"./Alert-DS4wdr90.js";import"./AlertIcon-DccMdP4x.js";import"./AlertBadge-C4kzYlwK.js";import"./Align-CvBnxpZ9.js";import"./TableFooterRow-D6aEsnIU.js";import"./SkeletonText-OUkNLea7.js";import"./Avatar-CzS_PaPg.js";import"./AvatarStack-gS-QFUhx.js";import"./Badge-pduaJyNo.js";import"./BigNumber-C6YnvGfW.js";import"./Breadcrumb-zkPOTCEY.js";import"./Link-CycQML51.js";import"./Heading-CqrprVNa.js";import"./Legend-BEHnIW2z.js";import"./FileCardList-C_rEcyHX.js";import"./Image-BjMAEZpO.js";import"./CodeBlock-C78MQn1M.js";import"./CopyButton-BrTvetk3.js";import"./Tooltip-BCSx2I17.js";import"./react-children-utilities-CHnKhwA5.js";import"./Color-Cg0KBiuB.js";import"./Content-BTmNLdH3.js";import"./ContextualHelpTrigger-CPwLcXd-.js";import"./CounterBadge-Df-TLdUN.js";import"./DonutChart-HdnZjexS.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bw3BtaeA.js";import"./Header-58xp89cR.js";import"./Initials-Dn-v6RMi.js";import"./InlineCode-Bgeced_A.js";import"./LabeledValue-D1U5uPmA.js";import"./PopoverTrigger-lijkOxV4.js";import"./Markdown-mKW7thqp.js";import"./Separator-BZrbrDbR.js";import"./Message-DosFc2Ul.js";import"./MessageSeparator-BvxsHxYP.js";import"./NavigationGroup-BT4ECZzA.js";import"./Notification-C15VJ9u5.js";import"./NotificationProvider-Bg7JSXtT.js";import"./ProgressBar-BluggdId.js";import"./Rating-CgKc-YLb.js";import"./Skeleton-BPC61jVz.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,O=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(t=>{const e=`${o.split("@")[0]}@${t}`;return r.jsx(A,{value:e,textValue:e,children:e},e)}),pt={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),O(S)},t=c({defaultValues:{email:""}}),e=b(),j=t.watch("email");return r.jsx(d,{form:t,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(e,{name:"email",children:r.jsxs(i,{children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:o=>{const t=c();g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsxs(i,{...o,isInvalid:!0,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(e)]})]})}},s={render:o=>{const t=c(),e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
