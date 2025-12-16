import{j as r,r as x}from"./iframe-V6WnBfM7.js";import{u as l,F as a}from"./Form-BFN9X6JW.js";import{L as s}from"./Label-DEwwG9Jt.js";import{F as c,t as j}from"./Field-DySAKZE6.js";import{B as t}from"./Button-RYsAGsBp.js";import{S}from"./Section-C3IzM_e_.js";import{A as b}from"./ActionGroup-PdVGvWFz.js";import{s as u}from"./Action-B-oQDmqe.js";import{F as m}from"./FileField-DVi6supb.js";import{F as B}from"./FieldError-CMIqd9eM.js";import{R as d}from"./ResetButton-DyXJSvX6.js";import{S as p}from"./SubmitButton-CHHAinLt.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DYYNnrYB.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DFUX8R2_.js";import"./index-BKCF-LL0.js";import"./index-WvfsijJu.js";import"./useLocalizedStringFormatter-DNkPXAX_.js";import"./context-LYg4mQF7.js";import"./Label-CXxg3a67.js";import"./utils-XXCohoWw.js";import"./Hidden-CdYZU9wP.js";import"./dynamic-DY2czHtX.js";import"./IconApp-Dy8CvIso.js";import"./remote-BEdoHpvj.js";import"./IconX-DudELXV7.js";import"./IconCheck-C4i47zDQ.js";import"./Text-BOvroeJC.js";import"./EmulatedBoldText-C80B2tZx.js";import"./Text-D3RRQUEj.js";import"./LoadingSpinner-B8i510y1.js";import"./ariaLive-IMmTuqYB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-X5JzQY6M.js";import"./ProgressBar-DGuSqhT6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-EvuRJYDK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D8kRQmXV.js";import"./useFocus-CBAz-6m6.js";import"./useFocusRing-ffR2xJu-.js";import"./useFocusable-Cu8jcZF4.js";import"./ContextMenuSection-BCiBPO23.js";import"./lib-90ocxLs-.js";import"./Dialog-C89akVID.js";import"./RSPContexts-Bt_iJ6go.js";import"./OverlayArrow-Cit__A6Y.js";import"./useControlledState-CthGvIJy.js";import"./Collection-z9VX5kUn.js";import"./CollectionBuilder-DFDOtDir.js";import"./SelectionIndicator-D4v-q-K9.js";import"./Separator-BqbnfN10.js";import"./SelectionManager-BQeEKp2X.js";import"./useEvent-DIPTDlyA.js";import"./useCollator-Dg7pOOpD.js";import"./FocusScope-CBJcWxYD.js";import"./VisuallyHidden-Cv44kzCG.js";import"./getActionGroupSlot-BOc6vLFR.js";import"./useStatic-BS6-BQsW.js";import"./context-D5s5gcMw.js";import"./useFormValidation-sHnlqGhj.js";import"./FieldError-D586kEZH.js";import"./Input-CgTEN6Lm.js";import"./useFieldComponent-0Fzy9Tw8.js";import"./IconDanger-XFGdJtLf.js";import"./useRef-dMG_y6og.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Tr={title:"Integrations/React Hook Form/FileField",component:c,render:()=>{const e=async h=>{await u(5e3),y(h)},f=l({defaultValues:{user:""}}),F=j();return r.jsx(a,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...n.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,kr as __namedExportsOrder,Tr as default};
