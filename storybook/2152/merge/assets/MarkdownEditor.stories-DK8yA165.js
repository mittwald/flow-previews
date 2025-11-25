import{j as r,r as x}from"./iframe-CwbJq3r1.js";import{c as m,u as a,F as d,t as E}from"./Form-C9I1kaA2.js";import{L as s}from"./Label-hfc8gnGk.js";import{R as u,S as c}from"./ResetButton-Cg_lrBPM.js";import{B as l}from"./Button-CDiKsYfE.js";import{S as j,s as p}from"./Section-BfEoCltm.js";import{A as b}from"./ActionGroup-DSsfeKXt.js";import{t as n,F as g}from"./Modal-UmnffMZn.js";import"./index-nuYtCEEu.js";import"./dynamic-IznNfavT.js";import"./flowComponent-DXmJ7qTr.js";import"./index-DOh9HP8s.js";import"./clsx-B-dksMZM.js";import"./index-BteSo1JG.js";import"./useLocalizedStringFormatter-B4yqbLzs.js";import"./context-BZjsOLmp.js";import"./browser-kBiuzLEF.js";import"./utils-CPaMkJSd.js";import"./ProgressBar-D7w8upNS.js";import"./Hidden-kKtmtVK1.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning--_iZ6FJr.js";import"./Text-CrE3MVm4.js";import"./EmulatedBoldText-BqYq2ptk.js";import"./LoadingSpinner-mT4GMrz2.js";import"./Button-Bhd7ARuI.js";import"./useFocusRing-BPZjqIep.js";import"./useFocusable-Bezx6XMf.js";import"./context-B56GsAs1.js";import"./RSPContexts-y_L0XZPW.js";import"./Collection-BPSIvTLJ.js";import"./CollectionBuilder-Dfx3RB_n.js";import"./SelectionIndicator-D2MfWhCg.js";import"./Separator-BubC8oQ4.js";import"./useStatic-D3JCqzcf.js";import"./FileCardList-CFXH-qjX.js";import"./Avatar-C4sAvZAr.js";import"./AlertIcon-D4SK6nAz.js";import"./Image-Bmadiq8c.js";import"./Link-BAl7QXrG.js";import"./ControlledNotification-Deb0rzCB.js";import"./Flex-DUcNemwf.js";import"./Accordion-BQnPG_jT.js";import"./Alert-x-P_ExCm.js";import"./AlertBadge-DzKW-VdF.js";import"./Align-DDaFErA1.js";import"./AvatarStack-DTk1p07I.js";import"./BigNumber-CBUp9ofh.js";import"./Breadcrumb-CmDjMlTt.js";import"./Heading-FVvo5o9O.js";import"./Legend-D05yZHp2.js";import"./Color-DfZVycWq.js";import"./TableFooterRow-DQtCx6U6.js";import"./SkeletonText-C0pUD_bb.js";import"./Content-C5Mjar79.js";import"./CounterBadge-Dgds6XQc.js";import"./DonutChart-Bll2GL_J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CSYNvEVP.js";import"./Header-DUtH1frW.js";import"./Initials-DbAAmjP_.js";import"./InlineCode-CA30spDN.js";import"./LayoutCard-BEWgIH8M.js";import"./Separator-ucvqUY6a.js";import"./MessageSeparator-BVYCvU4X.js";import"./NavigationGroup-CmJE1VHy.js";import"./Notification-Cfojyaki.js";import"./NotificationProvider-x4r_49LO.js";import"./ProgressBar-DSuKBqER.js";import"./Rating-e_Mh9Lse.js";import"./Skeleton-DkzLlt2Q.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Cr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await p(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(d,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Cr as default};
