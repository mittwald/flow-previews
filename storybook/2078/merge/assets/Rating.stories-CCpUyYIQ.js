import{j as r,r as g}from"./iframe-D1IXLGfs.js";import{b as p,u as c,F as d,t as x}from"./Form-Bff3UVAM.js";import{L as o}from"./Label-DqDuDjZM.js";import"./ResetButton-DuVxIEvp.js";import{B as s}from"./Button-C4C6Tlp0.js";import{S as u,s as l}from"./Section-C53WOw1M.js";import{A as F}from"./ActionGroup-Dy6atzM_.js";import{ao as e,g as j}from"./TimeField-AGTx6k1i.js";import"./index-nuYtCEEu.js";import"./dynamic-pDnrtSWy.js";import"./PropsContextProvider-C_Awy-Mb.js";import"./mergeRefs-beV1eqaE.js";import"./index-CvlGE98O.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-B1FtVS3l.js";import"./context-Co7rtKcb.js";import"./browser-tVHcyQIt.js";import"./utils-B-QWEDo7.js";import"./ProgressBar-yyUOmkTp.js";import"./Hidden-CcqmDqte.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BxNDhWjd.js";import"./Text-D1LKMi-w.js";import"./EmulatedBoldText-DH1aO4MF.js";import"./LoadingSpinner-7FjPacVo.js";import"./Button-CMJuT-cA.js";import"./useFocusRing-D8NPA1ph.js";import"./useFocusable-C6Y2IEKU.js";import"./context-5e9UnPLe.js";import"./RSPContexts-BgSWsIZW.js";import"./Collection-DvnA0NAr.js";import"./CollectionBuilder-DezSz7RI.js";import"./SelectionIndicator-CBNg2on9.js";import"./Separator-ifeGnJlj.js";import"./useStatic-CpvtqM-K.js";import"./Accordion-BzVkjqgY.js";import"./Alert-QHsz_O3h.js";import"./AlertIcon-D96GlUxX.js";import"./AlertBadge-BYlu6Hm_.js";import"./Align-B09u4AJz.js";import"./Popover-BXbsVRKM.js";import"./OverlayTrigger-B4YqZS9k.js";import"./TableFooterRow-JV1dlzn6.js";import"./SkeletonText-BvUdv64z.js";import"./Avatar-Dgoo8XLu.js";import"./AvatarStack-DtbcXK87.js";import"./Badge-C-697TDl.js";import"./BigNumber-D0ECKC0O.js";import"./Breadcrumb-BUr6ABI5.js";import"./Link-CxLhPbdv.js";import"./Heading-oQ8JRrCO.js";import"./Legend-CqX9YVYz.js";import"./FileCardList-B1MHdddU.js";import"./Image-BtTPpMHP.js";import"./Color-BS8KIqfb.js";import"./Content-BzpcLFjt.js";import"./ContextualHelpTrigger-DAOvEHNM.js";import"./CounterBadge-BX6TKafN.js";import"./DonutChart-JW7SWDsk.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DShuYc2u.js";import"./Header-Dbn0HhfV.js";import"./Initials-D9ELne8C.js";import"./InlineCode-CUmJ0bpc.js";import"./PopoverTrigger-DVp_5BpC.js";import"./Separator-QPbWx2p8.js";import"./Message-BpdzFhxT.js";import"./MessageSeparator-BOJp8Opk.js";import"./NavigationGroup-CpG2utD2.js";import"./Notification-civqnTG1.js";import"./NotificationProvider-CNqrmsHu.js";import"./ProgressBar-JXuTyxt5.js";import"./Skeleton-Fe8-xAPK.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),Gr={title:"Integrations/React Hook Form/Rating",component:p,render:()=>{const t=async h=>{await l(1500),E(h)},f=c({defaultValues:{ratingDefaultValue:3}}),a=x();return r.jsx(d,{form:f,onSubmit:t,children:r.jsxs(u,{children:[r.jsx(a,{name:"rating",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx(a,{name:"ratingDefaultValue",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx(a,{name:"ratingRequired",rules:{required:"Please rate"},children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx(F,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},i={},n={render:()=>{const t=c();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(d,{form:t,onSubmit:async()=>await l(2e3),children:r.jsxs(u,{children:[r.jsx(p,{name:"field",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsxs(e,{isInvalid:!0,children:[r.jsx(o,{children:"Rating"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})})}},m={render:()=>{const t=c();return r.jsxs(d,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Section>
          <Field name="field">
            <Rating>
              <Label>Rating</Label>
            </Rating>
          </Field>
          <Rating isInvalid>
            <Label>Rating</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </Rating>
        </Section>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <Rating>
            <Label>Rating</Label>
          </Rating>
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
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{i as Default,n as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Gr as default};
