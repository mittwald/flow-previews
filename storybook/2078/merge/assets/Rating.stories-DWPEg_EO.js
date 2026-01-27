import{j as r,r as F}from"./iframe-EUG4rdOg.js";import{a as p,u as c,F as d,t as x}from"./ResetButton-CYKdI8jW.js";import{L as o}from"./Label-CkXKJRQj.js";import{B as s}from"./Button-CEake6G1.js";import{S as u}from"./Section-BL7lUYfi.js";import{A as g}from"./ActionGroup-BZH42G79.js";import{s as l}from"./Action-DJ1WPhSw.js";import{F as j}from"./FieldError-D_yigqvG.js";import{R as e}from"./Rating-lO_CtRB3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-NoN6qZ.js";import"./flowComponent-C1dTLmWR.js";import"./index-DTdnl-5o.js";import"./clsx-B-dksMZM.js";import"./index-Dmbpubym.js";import"./useLocalizedStringFormatter-8TMbmljG.js";import"./context-DxYQrQkA.js";import"./useRef-oohqBRQZ.js";import"./utils-DJPQq0Ir.js";import"./ButtonView-BC_ryqYl.js";import"./browser-Dr5hWFfi.js";import"./Label.module-CUYTf9Jc.js";import"./Label-D6dDxJKJ.js";import"./Hidden-CsejW8LP.js";import"./IconWarning-CN_aXaJM.js";import"./remote-Bl5KctCq.js";import"./Text-DlICJI4S.js";import"./EmulatedBoldText-wvGqieyl.js";import"./Text-BNRjjFE0.js";import"./LoadingSpinner-CJqmAtLp.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-_TVwxj4G.js";import"./ProgressBar-CixwbPNP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddt3ftMp.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyxS_pZ-.js";import"./useFocus-Ca80QzG_.js";import"./useFocusRing-pMATsfPY.js";import"./useFocusable-YuTP7Rcp.js";import"./ContextMenuSection-BWaZOiqV.js";import"./Dialog-ClYDKCvQ.js";import"./RSPContexts-DeOxvpD0.js";import"./OverlayArrow-D1DBrKZH.js";import"./useControlledState-DorIVmrH.js";import"./Collection-D08qzwe9.js";import"./CollectionBuilder-B2OL-l6X.js";import"./SelectionIndicator-CBEc_uRa.js";import"./Separator-Hxx-CpzA.js";import"./SelectionManager-l6xAmoDy.js";import"./useEvent-KRKJPCS3.js";import"./useCollator-DB4dbnWY.js";import"./FocusScope-BEv8tYIC.js";import"./VisuallyHidden-DwLUyGt6.js";import"./getActionGroupSlot-nY47Clec.js";import"./useStatic-uvHDPGza.js";import"./context-B_Qm6y3p.js";import"./FieldError-CVa256dc.js";import"./AlertText-D2qcucoC.js";import"./AlertIcon-C4O6kAyM.js";import"./RadioGroup-UdHUdszv.js";import"./Form-DdP99ZP3.js";import"./useFormValidation-OWtbzU_T.js";import"./useFormReset-BWBNxDQ8.js";import"./useFieldComponent-Bs969hQl.js";import"./useMakeFocusable-C1Hl-BRR.js";const{action:R}=__STORYBOOK_MODULE_ACTIONS__,b=R("submit"),Ar={title:"Integrations/React Hook Form/Rating",component:p,render:()=>{const t=async h=>{await l(1500),b(h)},f=c({defaultValues:{ratingDefaultValue:3}}),a=x();return r.jsx(d,{form:f,onSubmit:t,children:r.jsxs(u,{children:[r.jsx(a,{name:"rating",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx(a,{name:"ratingDefaultValue",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx(a,{name:"ratingRequired",rules:{required:"Please rate"},children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx(g,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},i={},n={render:()=>{const t=c();return F.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(d,{form:t,onSubmit:async()=>await l(2e3),children:r.jsxs(u,{children:[r.jsx(p,{name:"field",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsxs(e,{isInvalid:!0,children:[r.jsx(o,{children:"Rating"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})})}},m={render:()=>{const t=c();return r.jsxs(d,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Ir=["Default","WithFieldError","WithFocus"];export{i as Default,n as WithFieldError,m as WithFocus,Ir as __namedExportsOrder,Ar as default};
