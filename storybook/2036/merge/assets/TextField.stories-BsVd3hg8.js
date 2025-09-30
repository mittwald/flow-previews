import{j as e}from"./iframe-BxDpVhRd.js";import{A as y}from"./ActionGroup-DNCuAw2y.js";import{B as m}from"./Button-COfabfFq.js";import{L as o}from"./Label-CMeeurCB.js";import{S as B}from"./Section-DXdLzCuH.js";import{T as n}from"./TextField-CLkMGK1E.js";import{a as L,u,F as c,t as N}from"./Form-CR4vr6SN.js";import{s as V}from"./Action-CQ_Tet5k.js";import"./index-Cun1SEai.js";import"./dynamic-ByIuCnCH.js";import"./PropsContextProvider-D577-dj4.js";import"./mergeRefs-Bevg5I71.js";import"./index-BnQUCq-S.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-DfO33wTs.js";import"./useStatic-DKuo4ovu.js";import"./IconWarning-CR1PBxFk.js";import"./Text-HfVZjSfr.js";import"./browser-DkE4SP-u.js";import"./EmulatedBoldText-Di64OaFb.js";import"./Text-Bq0GBBEx.js";import"./utils-CpjREF5t.js";import"./LoadingSpinner-D1vbb_I_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BeMG850z.js";import"./context-CSPhd592.js";import"./Button-CJ12dAAc.js";import"./ProgressBar-CjBgSU-K.js";import"./Label-CcH2uIQ5.js";import"./Hidden-sa0o7Y_i.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cfg_1SLq.js";import"./useFocus-DCdhMrgy.js";import"./useFocusRing-DkmhKsWm.js";import"./useFocusable-Bb-ubJOz.js";import"./ContextMenuSection-D81CeDCG.js";import"./Popover-DsSNZzMW.js";import"./DialogTriggerView-GlI_-8yJ.js";import"./context-CdLDj7bD.js";import"./RSPContexts-CaPgNpVT.js";import"./ClearPropsContextView-Ff-_bWul.js";import"./useControlledState-B0hr1ZXY.js";import"./FocusScope-CQY-r9mi.js";import"./useCollator-1chl5SyN.js";import"./VisuallyHidden-DX-N6FS4.js";import"./Collection-tycL-zcz.js";import"./CollectionBuilder-DsOEphd0.js";import"./context-BRTadV_G.js";import"./Separator-CnqlmT3o.js";import"./SelectionManager-BIdKqwjQ.js";import"./useEvent-DUrYkmv0.js";import"./Switch-TSGUx7eD.js";import"./useMakeFocusable-DOqtKzac.js";import"./useToggleState-GJ2JDvNb.js";import"./useFormReset-BdOLdhs-.js";import"./TextFieldBase-DNquX7f5.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Bmq-pcAK.js";import"./FieldError-BrR5GiZM.js";import"./FieldDescription-C72SkzYM.js";import"./TextField-DQk9fvM2.js";import"./Form-DnVdWn9l.js";import"./Group-BMNJ9slh.js";import"./Input-CLCKEIJY.js";import"./useTextField-BZVylDiv.js";import"./useFormValidation-BO_UVXRs.js";import"./ReactAriaControlledValueFix-CKJKlinu.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,T=O("submit"),ke={title:"Integrations/React Hook Form/TextField",component:L,render:()=>{const i=async s=>{await V(1500),T(s)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),t=N();return e.jsx(c,{form:r,onSubmit:i,children:e.jsxs(B,{children:[e.jsx(t,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsxs(y,{children:[e.jsx(m,{type:"reset",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}},a={},l={render:()=>{const i=s=>{T(s)},r=u({defaultValues:{name:""}}),t=N();return e.jsx(c,{form:r,onSubmit:i,children:e.jsxs(B,{children:[e.jsx(t,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(y,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},p={render:i=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await V(2e3),children:[e.jsx(L,{name:"email",children:e.jsx(n,{...i,type:"email",inputMode:"email",children:e.jsx(o,{children:"Email"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("email",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("email"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};var d,h,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,f,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    interface Values {
      name: string;
    }
    const handleOnSubmit = (values: Values) => {
      submitAction(values);
    };
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={handleOnSubmit}>
        <Section>
          <Field name="name">
            <TextField value={form.watch("name")} onChange={val => {
            form.setValue("name", val.toUpperCase());
          }}>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <Button type="submit">Submit</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(F=(f=l.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var b,S,g;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"email"}>
          <TextField {...props} type="email" inputMode="email">
            <Label>Email</Label>
          </TextField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("email", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("email")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(g=(S=p.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const He=["Default","WithTransformedValue","WithFocusAndError"];export{a as Default,p as WithFocusAndError,l as WithTransformedValue,He as __namedExportsOrder,ke as default};
