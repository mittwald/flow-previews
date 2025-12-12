import{j as r,r as x}from"./iframe-DNac-Rqf.js";import{b as m,u as a,F as p,t as E}from"./Form-BbGFvx7t.js";import{L as s}from"./Label-CblnI0HW.js";import{R as u,S as c}from"./ResetButton-CxGO8Txt.js";import{B as l}from"./Button-CUSLqQMc.js";import{S as j,s as d}from"./Section-DvtlFJN0.js";import{A as b}from"./ActionGroup-HKL5W0AJ.js";import{r as n,g}from"./TimeField-DpY9PVqh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DYsIbK1A.js";import"./PropsContextProvider-C_xkOl2m.js";import"./mergeRefs-CMWgjpmK.js";import"./index--GDWo6c1.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BLbNTQNm.js";import"./context-g2-sYTkT.js";import"./browser-nJ4CE5Oc.js";import"./utils-BduO7XRu.js";import"./ProgressBar-Cg_AUX6O.js";import"./Hidden-DGwLcp0N.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Cg768Zjl.js";import"./remote-DNzJzz_i.js";import"./Text-D0ZE_3Re.js";import"./EmulatedBoldText-Dq-fgG2H.js";import"./LoadingSpinner-lobDwtPy.js";import"./Button-jJfhABmc.js";import"./useFocusRing-Dh9thb9f.js";import"./useFocusable-rb0lSnzN.js";import"./context-CZdohShl.js";import"./RSPContexts-Cd6lFFaf.js";import"./Collection-igBrAvIn.js";import"./CollectionBuilder-qxwNBjxK.js";import"./SelectionIndicator-C4Ae8ohN.js";import"./Separator-DHka8Fv6.js";import"./useStatic-ihim0ckM.js";import"./Accordion-BpjGjdfu.js";import"./Alert-C4SmUy15.js";import"./AlertIcon-BCoAEyQh.js";import"./AlertBadge-B4Gw2oem.js";import"./Align-BYSxjVaI.js";import"./Popover-Cv71dRgv.js";import"./OverlayTrigger-BBjUB5WE.js";import"./TableFooterRow-TOZfCvNN.js";import"./SkeletonText-Dtz0dWFM.js";import"./Avatar-C3ls42ZT.js";import"./AvatarStack-CB7huUjR.js";import"./Badge-BTPi5GTz.js";import"./BigNumber-C6J1IAVW.js";import"./Breadcrumb-CusU5TRR.js";import"./Link-Ddteou-D.js";import"./Heading-B9C-Q8d_.js";import"./Legend-C843Nwot.js";import"./FileCardList-C3A0Rc32.js";import"./Image-D-F7EiiO.js";import"./Color-DOa8qdv1.js";import"./Content-ze7-zRt3.js";import"./ContextualHelpTrigger-BMAda_hh.js";import"./CounterBadge-BP5WHUxC.js";import"./DonutChart-ChhISA-m.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-B3WFXRVC.js";import"./Header-D32huwY0.js";import"./Initials-By4hdRc1.js";import"./InlineCode-BSZYsfjr.js";import"./PopoverTrigger-CtfZ1cKH.js";import"./Separator-T5QLy1gm.js";import"./Message-B9f-cPpE.js";import"./MessageSeparator-C2jALfgb.js";import"./NavigationGroup-D3e0XJsj.js";import"./Notification-BzWIEsEu.js";import"./NotificationProvider-BnmgoZU5.js";import"./ProgressBar-DEEkwCFH.js";import"./Rating-C_CSOchR.js";import"./Skeleton-CSWR-u_J.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Nr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Ur as __namedExportsOrder,Nr as default};
