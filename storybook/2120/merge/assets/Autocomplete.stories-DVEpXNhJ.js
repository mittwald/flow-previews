import{j as r,r as g}from"./iframe-DhEtuAZk.js";import{u as c,F as d,t as b,c as h}from"./Form-N3hbjQ-x.js";import{R as F,S as x}from"./ResetButton-BJ5Hz55D.js";import{B as f}from"./Button-BY9Kr7Ye.js";import{S as E}from"./Section-D4Gr2eQE.js";import{A as T}from"./ActionGroup-ESJbAOgN.js";import{s as u}from"./Action-BVtpAmgk.js";import{A as i,T as p,F as B,O as A}from"./Modal-DH23VA8R.js";import{L as l}from"./Label-BGOtPgJY.js";import"./index-nuYtCEEu.js";import"./dynamic-CwxkBJO8.js";import"./flowComponent-Sd9fxQN7.js";import"./index-Cjw7dVYj.js";import"./clsx-B-dksMZM.js";import"./index-DWS6YMK5.js";import"./useLocalizedStringFormatter-TlIqT86R.js";import"./context-B4_4eL8K.js";import"./browser-CRwqe8Ti.js";import"./utils-DSKmOAaE.js";import"./IconWarning-CZNr6BH3.js";import"./Text-CrxTC35E.js";import"./EmulatedBoldText-DZREZbVk.js";import"./LoadingSpinner-DZTinZ99.js";import"./Button-DH0rVXA4.js";import"./ProgressBar-CCRGuqks.js";import"./Hidden-Dx0nOzpY.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CtGm1hSf.js";import"./useFocusable-GlgNOWPt.js";import"./Dialog-CGia85P_.js";import"./RSPContexts-CP8S-33J.js";import"./OverlayArrow-D5AF8TQx.js";import"./useControlledState-Dj5UiPRe.js";import"./Collection-DTMrpJoY.js";import"./CollectionBuilder-BPnFrNW_.js";import"./SelectionIndicator-C_Yqy7JN.js";import"./Separator-qstkXCxY.js";import"./getActionGroupSlot-B2enF2gG.js";import"./useStatic-OTFolAlH.js";import"./context-D6NPEI3P.js";import"./Popover-bxB2am_R.js";import"./OverlayTrigger-BYK82yFU.js";import"./ControlledNotification-B3y-_NHJ.js";import"./ClearPropsContextView-CacYGh9N.js";import"./LayoutCard-DyYCqBUd.js";import"./Accordion-AwI-eLcX.js";import"./Alert-C0_k9BWo.js";import"./AlertIcon-CX41xz4j.js";import"./AlertBadge-Bu1tkE54.js";import"./Align-DoePDGix.js";import"./TableFooterRow-B5odsCqN.js";import"./SkeletonText-CXTn8PEF.js";import"./Avatar-DA2EpUV0.js";import"./AvatarStack-BTUWictn.js";import"./Badge--cveCoN-.js";import"./BigNumber-CXH91pve.js";import"./Breadcrumb-Dm-Ab6kG.js";import"./Link-CtepCC57.js";import"./Heading-w8VDel3v.js";import"./Legend-Cz5DfYh0.js";import"./FileCardList-Dskx08JL.js";import"./Image-rd2HOgTo.js";import"./CodeBlock-BbN4ELkc.js";import"./CopyButton-Bc4gZ0dZ.js";import"./Tooltip-OwQuKknw.js";import"./react-children-utilities-goMvo_yH.js";import"./Color-CRJdMals.js";import"./Content-B5pw8O7y.js";import"./ContextualHelpTrigger-_Yaxcn4v.js";import"./CounterBadge-oC6FtYIY.js";import"./DonutChart-CwT0BVij.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BD1lBLs6.js";import"./Header-aUvXKfPp.js";import"./Initials-BLkxqdWL.js";import"./InlineCode-BaTFar_i.js";import"./LabeledValue-Q6uf6T0w.js";import"./PopoverTrigger-DeiqVe2R.js";import"./Markdown-OhbZtiCz.js";import"./Separator-yVzKMq8d.js";import"./Message-BKYnO8Sw.js";import"./MessageSeparator-CZBnsaEy.js";import"./NavigationGroup-DmIc1IFk.js";import"./Notification-Bo-h0jCk.js";import"./NotificationProvider-Ew3gKcP-.js";import"./ProgressBar-DuPgLyUc.js";import"./Rating-k4iMHwyu.js";import"./Skeleton-Bf4mjzjC.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,O=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(t=>{const e=`${o.split("@")[0]}@${t}`;return r.jsx(A,{value:e,textValue:e,children:e},e)}),pt={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),O(S)},t=c({defaultValues:{email:""}}),e=b(),j=t.watch("email");return r.jsx(d,{form:t,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(e,{name:"email",children:r.jsxs(i,{children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:o=>{const t=c();g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsxs(i,{...o,isInvalid:!0,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(e)]})]})}},s={render:o=>{const t=c(),e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
