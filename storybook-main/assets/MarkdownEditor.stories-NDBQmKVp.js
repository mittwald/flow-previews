import{j as r,r as x}from"./iframe-DKDdzEg2.js";import{c as n,u as p,F as a,t as E}from"./Form-Chvorj6p.js";import{L as m}from"./Label-RGDjpvHy.js";import{R as u,S as c}from"./ResetButton-CxyjnaZ7.js";import{B as l}from"./Button-IIDunxYf.js";import{S as j}from"./Section-BlYXDkFo.js";import{A as b}from"./ActionGroup-DccX8bro.js";import{s as d}from"./Action-Bo6ZQC_V.js";import{m as s,F as g}from"./Modal-CwliNNiJ.js";import"./index-nuYtCEEu.js";import"./dynamic-Bw-gnOjZ.js";import"./flowComponent-DT3kn2rn.js";import"./index-6duIgbo8.js";import"./clsx-B-dksMZM.js";import"./index-BpsioLCE.js";import"./useLocalizedStringFormatter-DYvohNzk.js";import"./context-BHOWQ-F6.js";import"./browser-CFpNIPwD.js";import"./utils-glgR2nbC.js";import"./ProgressBar-Wlqbg7O4.js";import"./Hidden-C3L5W06o.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CYZefWcZ.js";import"./Text-CjflxeLx.js";import"./EmulatedBoldText-CD_LMSIk.js";import"./LoadingSpinner-Dty_8Gzu.js";import"./Button-CPtKzFV4.js";import"./useFocusRing-C2RFcQ8k.js";import"./useFocusable-DFxE2EDX.js";import"./Dialog-B3clCL3D.js";import"./RSPContexts-CyAJ8woy.js";import"./OverlayArrow-Dk7sPebR.js";import"./useControlledState-Fctu_HD9.js";import"./Collection-B8A5mjCR.js";import"./CollectionBuilder-DqTPNBbL.js";import"./SelectionIndicator-Ba__-_kO.js";import"./Separator-C02nZRTr.js";import"./getActionGroupSlot-CxXJdk8g.js";import"./useStatic-D7KAuRzE.js";import"./context-CDCUS0mP.js";import"./Popover-FiU_odVZ.js";import"./OverlayTrigger-BFzT5tm9.js";import"./ControlledNotification-A-nlkOWl.js";import"./ClearPropsContextView-jEZ-jszv.js";import"./LayoutCard-BiMl8twz.js";import"./Accordion-B6qbIRBj.js";import"./Alert-BKcRTWJ1.js";import"./AlertIcon-DTKwqTaw.js";import"./AlertBadge-qExA_A1s.js";import"./Align-YF_VCib_.js";import"./TableFooterRow-B5kek3pc.js";import"./SkeletonText-BFsiKAVX.js";import"./Avatar-HfBKa7-S.js";import"./AvatarStack-BAqbTSUA.js";import"./Badge-l5GKE6_A.js";import"./BigNumber-59jK5BSe.js";import"./Breadcrumb-81fsSz21.js";import"./Link-D6MGqqc4.js";import"./Heading-Dg8JptjO.js";import"./Legend-w3fonmao.js";import"./FileCardList-B9Uf0zuc.js";import"./Image-BWRlhe9x.js";import"./CodeBlock-BFll9a2A.js";import"./CopyButton-CpBG4-QY.js";import"./Tooltip-DjRJxdw8.js";import"./react-children-utilities-5wsaFL6D.js";import"./Color-BNN9qFvq.js";import"./Content-C0vcMxy5.js";import"./ContextualHelpTrigger-CVj6wYkq.js";import"./CounterBadge-5IM3_DLn.js";import"./DonutChart-DfsKudDh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Cq7vsP2F.js";import"./Header-CycXZnr3.js";import"./Initials-D_TulZuS.js";import"./InlineCode-DJEF18pw.js";import"./LabeledValue-BwyMvv4-.js";import"./PopoverTrigger-C0NOt86m.js";import"./Markdown-DvRsFFz3.js";import"./Separator-DtSoVEwv.js";import"./Message-Dbcl2XRw.js";import"./MessageSeparator-CSbQdfrJ.js";import"./NavigationGroup-CHqgAgY6.js";import"./Notification-BDRnPedH.js";import"./NotificationProvider-CzLfo5F4.js";import"./ProgressBar-k15nJaNS.js";import"./Rating-CaF2rOcE.js";import"./Skeleton-DHQXuh7L.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),io={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const mo=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,mo as __namedExportsOrder,io as default};
