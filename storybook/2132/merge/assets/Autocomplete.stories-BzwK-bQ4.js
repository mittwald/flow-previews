import{j as r,r as S}from"./iframe-Bl9ZNzly.js";import{u as c,F as d,t as b,c as h}from"./Form-D4bMdH2K.js";import{R as F,S as x}from"./ResetButton-DWEYZxhb.js";import{B as f}from"./Button-C43dgBgP.js";import{S as E,s as u}from"./Section-CDNuzGQn.js";import{A as T}from"./ActionGroup-B7w-C4eg.js";import{c as i,T as p,g as B,O as y}from"./TimeField-B_NJ8Ky6.js";import{L as l}from"./Label-DNzUxKIf.js";import"./index-nuYtCEEu.js";import"./dynamic-DN5dqmlD.js";import"./PropsContextProvider-DcJmUF2I.js";import"./mergeRefs-ux46nP0M.js";import"./index-BGoG8N2m.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-IXeJde12.js";import"./context-BsRR-XG9.js";import"./browser-DgAJHjYP.js";import"./utils-Ba3Wc4Cj.js";import"./IconWarning-CdD_Vr9D.js";import"./Text-DVbVn-gX.js";import"./EmulatedBoldText-C2RodUkO.js";import"./LoadingSpinner-BmMjYWfH.js";import"./Button-CmlWxNPG.js";import"./ProgressBar-D1AHMkFy.js";import"./Hidden-B2JOjUUO.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DOvKN8uX.js";import"./useFocusable-JrbUxoa4.js";import"./context-B3t2ll3v.js";import"./RSPContexts-CKPxvq-y.js";import"./Collection-2c0i4EEE.js";import"./CollectionBuilder-BRsb4ZNp.js";import"./SelectionIndicator-FRTj7WMW.js";import"./Separator-E4Y45gOI.js";import"./useStatic-CHy8y9O8.js";import"./getActionGroupSlot-BTnOUAI3.js";import"./Accordion-BUjWPilm.js";import"./Alert-C0kR42rQ.js";import"./AlertIcon-CHB7dkgT.js";import"./AlertBadge-D4s5aIEX.js";import"./Align-CpM0_uVF.js";import"./Popover-B6t3DWPA.js";import"./OverlayTrigger-DDLdbzyu.js";import"./TableFooterRow-DMeEteug.js";import"./SkeletonText-CN7sz2xZ.js";import"./Avatar-BbmMq3FT.js";import"./AvatarStack-B2yM02yc.js";import"./Badge-9mW_yPuD.js";import"./BigNumber-DoG3YCKA.js";import"./Breadcrumb-Cp2zriY7.js";import"./Link-5zhhGX89.js";import"./Heading-6r91OnV5.js";import"./Legend-DkfP-nrK.js";import"./FileCardList-Cz5qlLht.js";import"./Image-CXwyLNTy.js";import"./Color-DNqf-ZTv.js";import"./Content-C5jzPnX3.js";import"./ContextualHelpTrigger-ckkh_Rgl.js";import"./CounterBadge-D8ojNEaL.js";import"./DonutChart-CwEutUfZ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-LspQ7VGl.js";import"./Header-BkQqDlqE.js";import"./Initials-I4jIDVmP.js";import"./InlineCode-B5iqyuuQ.js";import"./PopoverTrigger-DSjKq8wS.js";import"./Separator-Cyan_bJo.js";import"./Message-CFIx3glm.js";import"./MessageSeparator-BMRRM_XG.js";import"./NavigationGroup-Dk3SJKPd.js";import"./Notification-CB0idSLS.js";import"./NotificationProvider-CofHTDPs.js";import"./ProgressBar-Btc4VOSd.js";import"./Rating-AGxiWe12.js";import"./Skeleton-Bm0zXdSH.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,O=A("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(y,{value:t,textValue:t,children:t},t)}),zr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async g=>{await u(1500),O(g)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",children:r.jsxs(i,{children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:o=>{const e=c();S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,isInvalid:!0,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},s={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Jr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,s as WithFocus,Jr as __namedExportsOrder,zr as default};
