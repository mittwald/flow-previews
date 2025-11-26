import{j as r,r as S}from"./iframe-BjQgS_dl.js";import{u as c,F as d,t as b,b as h}from"./Form-CyjpWmDT.js";import{R as F,S as x}from"./ResetButton-DRrKeGe6.js";import{B as f}from"./Button-mR6tCl9f.js";import{S as E,s as u}from"./Section-BeaFJCve.js";import{A as T}from"./ActionGroup-CR4mXt-z.js";import{c as i,T as l,g as B,O as y}from"./TimeField-DmBCIGkd.js";import{L as p}from"./Label-BioMMRbR.js";import"./index-nuYtCEEu.js";import"./dynamic-CTQIFy3Y.js";import"./PropsContextProvider-B3msEGiP.js";import"./mergeRefs-BqcSeRH_.js";import"./index-CCcXhUlF.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Dg6sdA5Z.js";import"./context-3TgVXJa8.js";import"./browser-D8Ytpe6r.js";import"./utils-C6Mwuf68.js";import"./IconWarning-wUhw_T8r.js";import"./Text-hFF5yDpy.js";import"./EmulatedBoldText-CmEhCy_I.js";import"./LoadingSpinner-BVWf40cO.js";import"./Button-CWLE3PAH.js";import"./ProgressBar-DBLE5koh.js";import"./Hidden-CbsoacY0.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BWD7k8n6.js";import"./useFocusable-CMVEVLbf.js";import"./context-C9CRIziz.js";import"./RSPContexts-JWS-CQt4.js";import"./Collection-Uuc2P1Rm.js";import"./CollectionBuilder-SW3JOyLp.js";import"./SelectionIndicator-DDS3Avz9.js";import"./Separator-DKQ5QqW9.js";import"./useStatic-CbhvCGnA.js";import"./Accordion-HUQJDa8a.js";import"./Alert-dt7Crh6d.js";import"./AlertIcon-CKkF89KF.js";import"./AlertBadge-BuoAO-EF.js";import"./Align-whB8MF17.js";import"./Popover-DNrzHtdF.js";import"./OverlayTrigger-BZYsa2Ar.js";import"./TableFooterRow-DIeYbuw8.js";import"./SkeletonText-CYyiBvSU.js";import"./Avatar-BzNSebrE.js";import"./AvatarStack-B41TTh57.js";import"./Badge-CWhMpUJo.js";import"./BigNumber-DelUDah8.js";import"./Breadcrumb-W_Ta7J5l.js";import"./Link-toGczOVY.js";import"./Heading-DmijLSYI.js";import"./Legend-CJxX7Jjd.js";import"./FileCardList-DxtvYBZN.js";import"./Image-D2Uh7TNb.js";import"./Color-CkV5zOWc.js";import"./Content-B-6ROZD8.js";import"./ContextualHelpTrigger-GCKXkGjA.js";import"./CounterBadge-BVTBh7o7.js";import"./DonutChart-CxTDQKuL.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-s0Iy2v7I.js";import"./Header-CccJlXz1.js";import"./Initials-BQ1BPtAw.js";import"./InlineCode-DubGci4q.js";import"./PopoverTrigger-vpZCTXgF.js";import"./Separator-V7QUjuvc.js";import"./Message-B_08b52f.js";import"./MessageSeparator-a9jr4f53.js";import"./NavigationGroup-DACyTvZZ.js";import"./Notification-CufI5Fok.js";import"./NotificationProvider-Ba5bESUN.js";import"./ProgressBar-C_67UiSI.js";import"./Rating-CzDqBwDX.js";import"./Skeleton-CgTPZh5a.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,w=A("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(y,{value:t,textValue:t,children:t},t)}),Yr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async g=>{await u(1500),w(g)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <Autocomplete {...props}>
          <TextField isInvalid>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
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
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,zr as __namedExportsOrder,Yr as default};
