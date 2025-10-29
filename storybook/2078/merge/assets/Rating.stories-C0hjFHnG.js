import{j as r,r as F}from"./iframe-qTztDmQ9.js";import{a as p,u as c,F as d,t as x}from"./Form-_TiOEZqw.js";import{L as o}from"./Label-B_HtseH-.js";import{B as m}from"./Button-B4S912ZH.js";import{S as u}from"./Section-_3FhfXN7.js";import{A as g}from"./ActionGroup-DAaZlTM3.js";import{s as l}from"./Action-DjajA33V.js";import{F as j}from"./useFieldComponent-DGEmXGQh.js";import{R as e}from"./Rating-DVXuLcE6.js";import"./index-nuYtCEEu.js";import"./flowComponent-Bak4HlW4.js";import"./index-P12icK_R.js";import"./clsx-B-dksMZM.js";import"./index-_9O3yG_2.js";import"./useLocalizedStringFormatter-CIyKheH2.js";import"./context-bFJEZtp8.js";import"./browser-D-RoGxAl.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bo8Flsc_.js";import"./utils-CdWUsvaa.js";import"./Hidden-B1UrvXuA.js";import"./IconWarning-DPAJHOeD.js";import"./Text-C9f0aLW8.js";import"./EmulatedBoldText-C04JDKuJ.js";import"./Text-B9fEov2V.js";import"./LoadingSpinner-C5H0hepe.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BJWArbVY.js";import"./ProgressBar-BBefMTke.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-uF6YmIyy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dljjmf_y.js";import"./useFocus-CdJCReig.js";import"./useFocusRing-hzSL5p2c.js";import"./useFocusable-Q1pEG0eK.js";import"./ContextMenuSection-CsIBhJMu.js";import"./Dialog-a9xsPkPz.js";import"./RSPContexts-C3w4xSHJ.js";import"./OverlayArrow-CaJ_i3sf.js";import"./useControlledState-tlJilXH9.js";import"./Collection-CQdjy6gf.js";import"./CollectionBuilder-B-XA9uLm.js";import"./SelectionIndicator-gGCk-Q46.js";import"./Separator-Duld6zlz.js";import"./SelectionManager-DzXI_LHw.js";import"./useEvent-qXt-HnUm.js";import"./useCollator-CFJsu416.js";import"./FocusScope-BLJU626h.js";import"./VisuallyHidden-DWMxxCWQ.js";import"./dynamic-BKe9EJ7U.js";import"./getActionGroupSlot-CA2czWAm.js";import"./useStatic-CJuuYRzf.js";import"./context-Cf3mID_7.js";import"./react-children-utilities-C8dGDy-T.js";import"./ClearPropsContext-CkWIpOjD.js";import"./RadioGroup-CPbLrPsT.js";import"./Form-D5uPTAwc.js";import"./useFormValidation-DR7MCNfC.js";import"./useFormReset-CmjicI53.js";import"./useMakeFocusable-CCDaBvVW.js";const{action:R}=__STORYBOOK_MODULE_ACTIONS__,b=R("submit"),wr={title:"Integrations/React Hook Form/Rating",component:p,render:()=>{const t=async h=>{await l(1500),b(h)},f=c({defaultValues:{ratingDefaultValue:3}}),a=x();return r.jsx(d,{form:f,onSubmit:t,children:r.jsxs(u,{children:[r.jsx(a,{name:"rating",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx(a,{name:"ratingDefaultValue",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx(a,{name:"ratingRequired",rules:{required:"Please rate"},children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx(g,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},i={},n={render:()=>{const t=c();return F.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(d,{form:t,onSubmit:async()=>await l(2e3),children:r.jsxs(u,{children:[r.jsx(p,{name:"field",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsxs(e,{isInvalid:!0,children:[r.jsx(o,{children:"Rating"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})})}},s={render:()=>{const t=c();return r.jsxs(d,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Dr=["Default","WithFieldError","WithFocus"];export{i as Default,n as WithFieldError,s as WithFocus,Dr as __namedExportsOrder,wr as default};
