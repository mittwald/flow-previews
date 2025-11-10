import{j as r,r as g}from"./iframe-Bzotfv2d.js";import{u as c,F as d,t as b,c as h}from"./Form-NuKjq-E5.js";import{R as F,S as x}from"./ResetButton-BKQMjSLz.js";import{B as f}from"./Button-B5Yu3Ofr.js";import{S as E}from"./Section-BjhFx9b4.js";import{A as T}from"./ActionGroup-THbN8B7U.js";import{s as u}from"./Action-BGM-IIID.js";import{A as i,T as p,F as B,O as A}from"./Modal-COByggjk.js";import{L as l}from"./Label-9yzciBbq.js";import"./index-nuYtCEEu.js";import"./dynamic-XEUS-i0b.js";import"./flowComponent-Ce43WGqS.js";import"./index-Dtu7UrbV.js";import"./clsx-B-dksMZM.js";import"./index-s2lSSiFB.js";import"./useLocalizedStringFormatter-CEUFB_Kk.js";import"./context-CZ6Qg3vv.js";import"./browser-Da6kOqay.js";import"./utils-F6vOfgTC.js";import"./IconWarning-DA_wmemp.js";import"./Text-C-DP5r93.js";import"./EmulatedBoldText-CowooJQh.js";import"./LoadingSpinner-B7Dg5gJY.js";import"./Button-DKhocf4j.js";import"./ProgressBar-DrjjCA4M.js";import"./Hidden-A2gmu8PL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Bwoimiux.js";import"./useFocusable-DtwtCMr6.js";import"./Dialog-DRtGMcXs.js";import"./RSPContexts-94nDykOv.js";import"./OverlayArrow-w3VLB_7G.js";import"./useControlledState-BqxXkR6q.js";import"./Collection-BBYs79dF.js";import"./CollectionBuilder-BcriWVNa.js";import"./SelectionIndicator-CkQFqim6.js";import"./Separator-D-my95s-.js";import"./getActionGroupSlot-DupNakeF.js";import"./useStatic-CUbPzepq.js";import"./context-DytNMng2.js";import"./Popover-DIj_9e80.js";import"./OverlayTrigger-DYCZz7an.js";import"./ControlledNotification-TPI0xyld.js";import"./ClearPropsContextView-CsYOqVLr.js";import"./LayoutCard-J6TlJO4o.js";import"./Accordion-BptsSE4V.js";import"./Alert-eyCmAgC6.js";import"./AlertIcon-CgsKNc5r.js";import"./AlertBadge-S_MnisZk.js";import"./Align-BJUu4eGR.js";import"./TableFooterRow-DxgEmBL4.js";import"./SkeletonText-OeVXjdS7.js";import"./Avatar-cPF8oF7Q.js";import"./AvatarStack-BkUGgLvx.js";import"./Badge-CdzfZfsb.js";import"./BigNumber-BNjBbCLr.js";import"./Breadcrumb-B6JxXwVP.js";import"./Link-BAhU_8bm.js";import"./Heading-DTNjAjmU.js";import"./Legend-f-p8RcrW.js";import"./FileCardList-B5PDKscr.js";import"./Image-CQeciW3U.js";import"./CodeBlock-CnJ67bJ1.js";import"./CopyButton-sBgtGoeo.js";import"./Tooltip-DpS8robH.js";import"./react-children-utilities-X89ZXH3Y.js";import"./Color-Ch6SLtqy.js";import"./Content-D54xBao4.js";import"./ContextualHelpTrigger-vzTqAVe_.js";import"./CounterBadge-BT0YRSln.js";import"./DonutChart-BmBQlJrD.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DGT6z0iR.js";import"./Header-DK-dy0Ik.js";import"./Initials-BjRxm0kU.js";import"./InlineCode-Dw8GCp6l.js";import"./LabeledValue-BUIGIaaH.js";import"./PopoverTrigger-Q37AsHcH.js";import"./Markdown-MT0EBmbc.js";import"./Separator-BnZ4szOt.js";import"./Message-DSIYRhqg.js";import"./MessageSeparator-DiJiVxnC.js";import"./NavigationGroup-BnO0sRue.js";import"./Notification-BIJ3tqS6.js";import"./NotificationProvider-Bad9adCH.js";import"./ProgressBar-DxbK2q7l.js";import"./Rating-CvLf8bfK.js";import"./Skeleton-BSBbHv2z.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,O=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(t=>{const e=`${o.split("@")[0]}@${t}`;return r.jsx(A,{value:e,textValue:e,children:e},e)}),pt={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),O(S)},t=c({defaultValues:{email:""}}),e=b(),j=t.watch("email");return r.jsx(d,{form:t,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(e,{name:"email",children:r.jsxs(i,{children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:o=>{const t=c();g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsxs(i,{...o,isInvalid:!0,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(e)]})]})}},s={render:o=>{const t=c(),e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
