import{j as r,r as x}from"./iframe-CkaLytcH.js";import{b as m,u as a,F as p,t as E}from"./Form-DT0yO1QW.js";import{L as s}from"./Label-C12WmE73.js";import{R as u,S as c}from"./ResetButton-DN2nIo5J.js";import{B as l}from"./Button-CNnlz4DJ.js";import{S as j,s as d}from"./Section-D3xKxzs1.js";import{A as b}from"./ActionGroup-CAlgHOw9.js";import{r as n,g}from"./TimeField-CD_1Cvsc.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CuWqRT77.js";import"./PropsContextProvider-B_PBnLNZ.js";import"./mergeRefs-CCvS6fDC.js";import"./index-CUykgx4T.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BLs_py7w.js";import"./context-BgsgCuSf.js";import"./browser-BGuPTbio.js";import"./utils-Cx1NHB3m.js";import"./ProgressBar-DEywvAoj.js";import"./Hidden-DtaNkSKc.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-at2C7kXG.js";import"./Text-tzLzAj2U.js";import"./EmulatedBoldText-ChGTtZfs.js";import"./LoadingSpinner-B6kRnXp7.js";import"./Button-6wBbL84E.js";import"./useFocusRing-BYIv-g0Z.js";import"./useFocusable-DNVgDv7W.js";import"./context-C49kt-dL.js";import"./RSPContexts-DGlCkRo9.js";import"./Collection-G136PDCR.js";import"./CollectionBuilder-D5yy7zsb.js";import"./SelectionIndicator-C6-uo9TF.js";import"./Separator-BUQgzvoO.js";import"./useStatic-CwKwrY2l.js";import"./Accordion-O8KQNDhm.js";import"./Alert-Cn90v1OP.js";import"./AlertIcon-C1KERsp1.js";import"./AlertBadge-EOMQWw9S.js";import"./Align-B8YLISN9.js";import"./Popover-O-ijI_rS.js";import"./OverlayTrigger-BAlGpEF-.js";import"./TableFooterRow-DTIDyRXC.js";import"./SkeletonText-BvetQVDs.js";import"./Avatar-D0TiQ1yF.js";import"./AvatarStack-D2_NoW2F.js";import"./Badge-BPLvzjro.js";import"./BigNumber-PI7ivuk4.js";import"./Breadcrumb-Cz8sITnV.js";import"./Link-Ch1hHAdK.js";import"./Heading-CDNPJ0iR.js";import"./Legend-D7Hlt0lN.js";import"./FileCardList-DbMTg1eZ.js";import"./Image-B4WOffmQ.js";import"./Color-Bv30AifR.js";import"./Content-CDQlrVSe.js";import"./ContextualHelpTrigger-O6xxa11A.js";import"./CounterBadge-BkFZCkUW.js";import"./DonutChart-CyfbjEIy.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DcaWbFCQ.js";import"./Header-CYrnS-JX.js";import"./Initials-o8TldnRX.js";import"./InlineCode-BSZBkh4R.js";import"./PopoverTrigger-DdiRrf85.js";import"./Separator-Bbi4YrrB.js";import"./Message-DaqEjKEm.js";import"./MessageSeparator-B31U0QQH.js";import"./NavigationGroup-CORL8hsO.js";import"./Notification-BilvgaaS.js";import"./NotificationProvider-CEjHGY9X.js";import"./ProgressBar-J82fOLhc.js";import"./Rating-JgrMmlzu.js";import"./Skeleton-DIhE6pV7.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Kr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
}`,...i.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Nr as __namedExportsOrder,Kr as default};
