import{j as r}from"./iframe-Bge_iwzq.js";import{A as i}from"./ActionGroup-Cm9WLYvL.js";import{L as m}from"./Label-DsCIDP_n.js";import{S as s}from"./Section-F6_pDsCx.js";import{T as a}from"./TextField-BGSlbhXb.js";import{F as t,u as c,S as d,R as y,t as p}from"./ResetButton-B8dyUvel.js";import{f as g,e as E,d as x}from"./lib-BeG1oiUg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C3MU2GF_.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./clsx-B-dksMZM.js";import"./index-Dbbom8kG.js";import"./getActionGroupSlot-DLRBpctv.js";import"./useStatic-CNeEScnJ.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./Label-CCD88BdD.js";import"./utils-rhPAe061.js";import"./Hidden-CDcFNb6q.js";import"./ContextMenuSection-S8YrfSf7.js";import"./ActionBatch-AWhYHCSY.js";import"./useOverlayController-wivVBOVc.js";import"./browser-EEHoGSlH.js";import"./Dialog-BA7SIyML.js";import"./Button-0WCxpm2-.js";import"./ProgressBar-VjbUKBDb.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXEJU3rI.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./RSPContexts-DPd6iTOd.js";import"./OverlayArrow-CPd1sFKC.js";import"./useControlledState-CyAGSHwZ.js";import"./Collection-DW5GmGUQ.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./SelectionIndicator-HpycCnAD.js";import"./Separator-B2lQeJLB.js";import"./Text-70WXc8nw.js";import"./SelectionManager-CZ-2QuwE.js";import"./useCollator-BqBbPKoz.js";import"./FocusScope-DsvOCLtc.js";import"./VisuallyHidden-BL5eqrat.js";import"./useControlledHostValueProps-5VhQyC8e.js";import"./useFieldComponent-DrAtnMqi.js";import"./FieldDescription-CKLwRnm1.js";import"./Text-Bo3CKbUr.js";import"./EmulatedBoldText-D9nC6wju.js";import"./Button-DYq5oiR6.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./LoadingSpinner-BWNPdeXh.js";import"./TextField-Ctm0SVNE.js";import"./FieldError-Cv0VAgMN.js";import"./Form-YPyJtwoF.js";import"./Group-Bwp5mwlQ.js";import"./Input-BXTXjJEE.js";import"./useTextField-4W-EXSfF.js";import"./useFormReset-CAOi_S_S.js";import"./useFormValidation-SyV8SqLU.js";import"./FieldError-D2SilRMV.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";import"./ActionGroupView-DMVI4rfL.js";import"./Content-CuNOzgqd.js";import"./Heading-JLPBp959.js";import"./Heading-DerjJN3d.js";import"./Modal-DEyfydXj.js";import"./Overlay-G0jPQhAE.js";import"./OverlayContextProvider-BzHb6wxA.js";import"./ButtonView-DwzX0guQ.js";import"./Flex-DYbjytEc.js";import"./useRef-C4wUjBhi.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,A=f("submit"),L=f("afterSubmit"),j=async n=>(await x(),A(n),L),Qr={title:"Integrations/React Hook Form/Form",component:t,render:n=>{const e=c({defaultValues:{name:""}}),o=p();return r.jsx(t,{...n,form:e,onSubmit:j,children:r.jsxs(s,{children:[r.jsx(o,{name:"name",children:r.jsx(a,{children:r.jsx(m,{children:"Name"})})}),r.jsxs(i,{children:[r.jsx(y,{slot:"abort",children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},u={},l={args:{isReadOnly:!0}},S={render:n=>{const e=c({defaultValues:{name:""}}),o=p();return r.jsx(t,{...n,form:e,onSubmit:()=>{e.setError("root",{message:"An error occurred during form submission."})},children:r.jsxs(s,{children:[r.jsx(o,{name:"name",children:r.jsx(a,{children:r.jsx(m,{children:"Name"})})}),r.jsx(i,{children:r.jsx(d,{children:"Submit"})})]})})}},h={render:n=>{const e=c({defaultValues:{name:""}}),o=p();return r.jsx(t,{...n,form:e,onSubmit:g,children:r.jsxs(s,{children:[r.jsx(o,{name:"name",children:r.jsx(a,{children:r.jsx(m,{children:"Name"})})}),r.jsx(i,{children:r.jsx(d,{children:"Submit"})})]})})}},F={render:n=>{const e=c({defaultValues:{name:""}}),o=p();return r.jsx(t,{...n,form:e,onSubmit:E,children:r.jsxs(s,{children:[r.jsx(o,{name:"name",children:r.jsx(a,{children:r.jsx(m,{children:"Name"})})}),r.jsx(i,{children:r.jsx(d,{children:"Submit"})})]})})}},b={render:n=>{const e=c({defaultValues:{name:""}}),o=p();return r.jsx(t,{...n,form:e,onSubmit:j,children:r.jsxs(s,{children:[r.jsx(o,{name:"name",rules:{validate:async()=>(await x(),"Name is invalid.")},children:r.jsx(a,{children:r.jsx(m,{children:"Name"})})}),r.jsx(i,{children:r.jsx(d,{children:"Submit"})})]})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const Xr=["Default","ReadOnly","WithHandledSubmitError","WithUnhandledSubmitError","WithUnhandledSubmitErrorSync","WithValidationError"];export{u as Default,l as ReadOnly,S as WithHandledSubmitError,h as WithUnhandledSubmitError,F as WithUnhandledSubmitErrorSync,b as WithValidationError,Xr as __namedExportsOrder,Qr as default};
