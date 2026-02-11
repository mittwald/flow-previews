import{j as r}from"./iframe-B___tkgA.js";import{A as i}from"./ActionGroup-BHdTvu9o.js";import{L as m}from"./Label-WD9nd_On.js";import{S as s}from"./Section-DE9sm5BA.js";import{T as a}from"./TextField-BEReKfZ9.js";import{F as t,u as c,S as d,R as y,t as u}from"./ResetButton-Crujzy8J.js";import{f as g,e as E,d as x}from"./lib-D5VUxOdz.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BEuCOou2.js";import"./flowComponent-Bo9LBx3J.js";import"./index-CJe1Xv2T.js";import"./clsx-B-dksMZM.js";import"./index-2yYueaxI.js";import"./getActionGroupSlot-CLc7h3ns.js";import"./useStatic-DSdFfo4Y.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BO-JJMTJ.js";import"./context-CHjly9N5.js";import"./Label-BwlZgh8W.js";import"./utils-BoKG2kRw.js";import"./Hidden-DKsxRYjN.js";import"./ContextMenuSection-BssuI41M.js";import"./Action-DRwD3AMr.js";import"./context-iZF9qbeo.js";import"./browser-C6gsgKxf.js";import"./Dialog-SqXlQhu9.js";import"./Button-dgLzajPx.js";import"./ProgressBar-CdmwSyiz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CH6QmtjC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-XNzvlEPV.js";import"./useFocus-x-GTmi1B.js";import"./useFocusRing-BdE9QsVo.js";import"./useFocusable-DdN6L3mC.js";import"./RSPContexts-xv2R9swO.js";import"./OverlayArrow-De6KLSjI.js";import"./useControlledState-xG-Gpz3Z.js";import"./Collection-XdP36m4g.js";import"./CollectionBuilder-BV7ZWrgu.js";import"./SelectionIndicator-D7aQ_5Xi.js";import"./Separator-7ST9riI-.js";import"./Text-CbxRuAhG.js";import"./SelectionManager-BkOmbFBM.js";import"./useEvent-FGSNypfV.js";import"./useCollator-C6qS_GFX.js";import"./FocusScope-6XhI78W1.js";import"./VisuallyHidden-feej_kfu.js";import"./useControlledHostValueProps-C4-i_rC0.js";import"./useFieldComponent-vfbWFIJK.js";import"./FieldDescription-C1ZwwWMX.js";import"./Text-C5KW7r-3.js";import"./EmulatedBoldText-BcNjSABl.js";import"./Button-CK4qYUON.js";import"./IconWarning-DnK3ATSm.js";import"./remote-CwYVL4Pl.js";import"./LoadingSpinner-gELkMREc.js";import"./TextField-4VWUIDAX.js";import"./FieldError-Bxvpebgp.js";import"./Form-Bd7gFKVi.js";import"./Group-CLJgWjIj.js";import"./Input-CKNBze1L.js";import"./useTextField-BSXvhdIQ.js";import"./useFormReset-BMzMnmaN.js";import"./useFormValidation-DPy8gvTm.js";import"./FieldError-DrmvSGqW.js";import"./AlertText-BYyQ41f3.js";import"./AlertIcon-COjYyYJX.js";import"./useRef-CEF838Jv.js";import"./ButtonView-B7YCzKos.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,A=f("submit"),L=f("afterSubmit"),j=async n=>(await x(),A(n),L),Kr={title:"Integrations/React Hook Form/Form",component:t,render:n=>{const e=c({defaultValues:{name:""}}),o=u();return r.jsx(t,{...n,form:e,onSubmit:j,children:r.jsxs(s,{children:[r.jsx(o,{name:"name",children:r.jsx(a,{children:r.jsx(m,{children:"Name"})})}),r.jsxs(i,{children:[r.jsx(y,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},p={},l={args:{isReadOnly:!0}},S={render:n=>{const e=c({defaultValues:{name:""}}),o=u();return r.jsx(t,{...n,form:e,onSubmit:()=>{e.setError("root",{message:"An error occurred during form submission."})},children:r.jsxs(s,{children:[r.jsx(o,{name:"name",children:r.jsx(a,{children:r.jsx(m,{children:"Name"})})}),r.jsx(i,{children:r.jsx(d,{children:"Submit"})})]})})}},h={render:n=>{const e=c({defaultValues:{name:""}}),o=u();return r.jsx(t,{...n,form:e,onSubmit:g,children:r.jsxs(s,{children:[r.jsx(o,{name:"name",children:r.jsx(a,{children:r.jsx(m,{children:"Name"})})}),r.jsx(i,{children:r.jsx(d,{children:"Submit"})})]})})}},F={render:n=>{const e=c({defaultValues:{name:""}}),o=u();return r.jsx(t,{...n,form:e,onSubmit:E,children:r.jsxs(s,{children:[r.jsx(o,{name:"name",children:r.jsx(a,{children:r.jsx(m,{children:"Name"})})}),r.jsx(i,{children:r.jsx(d,{children:"Submit"})})]})})}},b={render:n=>{const e=c({defaultValues:{name:""}}),o=u();return r.jsx(t,{...n,form:e,onSubmit:j,children:r.jsxs(s,{children:[r.jsx(o,{name:"name",rules:{validate:async()=>(await x(),"Name is invalid.")},children:r.jsx(a,{children:r.jsx(m,{children:"Name"})})}),r.jsx(i,{children:r.jsx(d,{children:"Submit"})})]})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...l.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form {...props} form={form} onSubmit={() => {
      form.setError("root", {
        message: "An error occurred during form submission."
      });
    }}>
        <Section>
          <Field name="name">
            <TextField>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <SubmitButton>Submit</SubmitButton>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form {...props} form={form} onSubmit={asyncLongFunctionWithError}>
        <Section>
          <Field name="name">
            <TextField>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <SubmitButton>Submit</SubmitButton>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...h.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form {...props} form={form} onSubmit={syncFunctionWithError}>
        <Section>
          <Field name="name">
            <TextField>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <SubmitButton>Submit</SubmitButton>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...F.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form {...props} form={form} onSubmit={handleSubmit}>
        <Section>
          <Field name="name" rules={{
          validate: async () => {
            await asyncLongFunction();
            return "Name is invalid.";
          }
        }}>
            <TextField>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <SubmitButton>Submit</SubmitButton>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...b.parameters?.docs?.source}}};const Mr=["Default","ReadOnly","WithHandledSubmitError","WithUnhandledSubmitError","WithUnhandledSubmitErrorSync","WithValidationError"];export{p as Default,l as ReadOnly,S as WithHandledSubmitError,h as WithUnhandledSubmitError,F as WithUnhandledSubmitErrorSync,b as WithValidationError,Mr as __namedExportsOrder,Kr as default};
