import{j as r,r as x}from"./iframe-Ctq1zpNY.js";import{b as m,u as a,F as p,t as E}from"./Form-C84o_xHk.js";import{L as s}from"./Label-CT-9atCO.js";import{R as u,S as c}from"./ResetButton-Tsnsh9NB.js";import{B as l}from"./Button-DNyG1kJP.js";import{S as j,s as d}from"./Section-D2jBz3SO.js";import{A as b}from"./ActionGroup-CARzfJtb.js";import{r as n,g}from"./TimeField-DpNFufVp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BfX5vXPY.js";import"./PropsContextProvider-BoUiLDJD.js";import"./mergeRefs-B0cZ0A1R.js";import"./index-CTRuU27q.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Ca1VgSxY.js";import"./context-BUbxt6aY.js";import"./browser-D7Nrk8GS.js";import"./utils-BnoqN3lQ.js";import"./ProgressBar-Bxh0Ye9X.js";import"./Hidden-DCaHa4pK.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-UjLKXv7l.js";import"./remote-0oz4JQoy.js";import"./Text-BfSoULNy.js";import"./EmulatedBoldText-DAcbt9PZ.js";import"./LoadingSpinner-Daveedqv.js";import"./Button-CDyTi84i.js";import"./useFocusRing-CS37ztg9.js";import"./useFocusable-wHVwTxSo.js";import"./context-C8D6suKc.js";import"./RSPContexts-DHJyFFU0.js";import"./Collection-Cmcp_j_K.js";import"./CollectionBuilder-6JKqc06M.js";import"./SelectionIndicator-BUhvtPLn.js";import"./Separator-DoPI3Rcg.js";import"./useStatic-BZ5oCv4Q.js";import"./Accordion-BlmA1-vk.js";import"./Alert-197Nc-vU.js";import"./AlertIcon-D5hQ6U-3.js";import"./AlertBadge-BEYUMP2v.js";import"./Align-CDoIACkY.js";import"./Popover-BOF7jNb2.js";import"./OverlayTrigger-CsCUjwyJ.js";import"./TableFooterRow-CA0OY6Ij.js";import"./SkeletonText-ZOgXAPP6.js";import"./Avatar-DCHePwE0.js";import"./AvatarStack-CgDyXG0P.js";import"./Badge-CP-oLjib.js";import"./BigNumber-DYHcOH-J.js";import"./Breadcrumb-1b5V4Dif.js";import"./Link-BTf1B7UH.js";import"./Heading-CoaPK5Bd.js";import"./Legend-DvSzQrMJ.js";import"./FileCardList-CBpBQcHx.js";import"./Image-DXaLhdwB.js";import"./Color-BBsiMDPd.js";import"./Content-CnMobkgI.js";import"./ContextualHelpTrigger-BSZNnUoZ.js";import"./CounterBadge-tJHLELVH.js";import"./DonutChart-D6V2PmVt.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-AUFqOAj4.js";import"./Header-16boNNDy.js";import"./Initials-BpI7DWhz.js";import"./InlineCode-C00u1vDr.js";import"./PopoverTrigger-DiryRmSf.js";import"./Separator-D_c6JRK_.js";import"./Message-CzMhkybn.js";import"./MessageSeparator-VEfMPvYr.js";import"./NavigationGroup-B0Bocd3L.js";import"./Notification-B7Llmu8M.js";import"./NotificationProvider-DSXavLVT.js";import"./ProgressBar-CNRtmkEG.js";import"./Rating-Cm4XTZ6E.js";import"./Skeleton-DUjtquuF.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Nr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
