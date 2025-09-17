import{j as e,r as k}from"./iframe-BAGTntfB.js";import{L as s}from"./Label-f9Yl8NxA.js";import{F as o}from"./FileField-a_36Px0D.js";import{B as t}from"./Button-ClQyukEh.js";import{S as H}from"./Section-ytSv1zvn.js";import{F as G}from"./FieldError-CzxDQYV0.js";import{F as U}from"./FieldDescription-BTtZPQbf.js";import{O as q,K as w}from"./IconWarning-SECJkQke.js";import{u as K,F as M,t as N}from"./Form-CY4BaXMY.js";import{A as T}from"./ActionGroup-kXE27rBg.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BVEq68NN.js";import"./mergeRefs-Ct4YEWrU.js";import"./index-TExY8AE4.js";import"./useLocalizedStringFormatter-DdilTbMd.js";import"./context-C8vSVPtT.js";import"./Label-CWJf374V.js";import"./utils-DSdQ5U5C.js";import"./Hidden-BFcGcOTS.js";import"./FormField.module-CqWyJNQI.js";import"./Form-BImra2vo.js";import"./useFocus-kqlw9bYS.js";import"./useLabel-jLc0StSH.js";import"./FieldError-DwSlV6wI.js";import"./Text-CZggwRKM.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CQeggyQD.js";import"./useFocusRing-uRy9P7F2.js";import"./browser-D8tJ8M3I.js";import"./Text-oSCAFhn5.js";import"./EmulatedBoldText-hfJfJt2X.js";import"./LoadingSpinner-DuAh__4X.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DldLr0Dh.js";import"./ProgressBar-yPlEiM2Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BeTrTVD4.js";import"./useFocusable-CvI8LjKe.js";import"./ContextMenuSection-BeQzdxEY.js";import"./Action-BhAAiBfS.js";import"./context-B68punRm.js";import"./useStatic-B7HpxjOi.js";import"./getActionGroupSlot-Bf03GRoZ.js";import"./dynamic-DicyFJZ2.js";import"./Popover-DIu09GMY.js";import"./DialogTriggerView-BimJk9-6.js";import"./RSPContexts-u_LIQrA5.js";import"./OverlayArrow-CIJbDC1X.js";import"./useControlledState-hqI-vqoJ.js";import"./FocusScope-Dx9vsLFf.js";import"./useCollator-C2nKvxEE.js";import"./VisuallyHidden-CCDJ4X70.js";import"./Collection-CyU2lrEr.js";import"./CollectionBuilder-BjHCxw5W.js";import"./Separator-BoyfOubv.js";import"./SearchField-BATSQzLF.js";import"./useTextField-aRRnCdTt.js";import"./useFormReset-DMVQ-F_N.js";import"./TextField-CGb-3Yan.js";import"./useEvent-DLvyF1-Y.js";import"./SelectionManager-DNLJemTe.js";import"./Switch-DxFGgU8l.js";import"./useToggleState-B4DVcZDp.js";import"./chunk-PULGOXDA-8tYzn7uh.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],z=q("outline","paperclip","Paperclip",Y),{action:J}=__STORYBOOK_MODULE_ACTIONS__,sr={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},Q=J("submit"),l={},c={args:{isReadOnly:!0}},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(U,{children:"Supported formats: .pem, .pfx"})]})},m={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(G,{children:"File too large"})]})},d={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(w,{children:e.jsx(z,{})})})})},u={render:r=>{const[n,a]=k.useState(null),i=n==null?void 0:n[0];return e.jsxs(H,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},F={render:()=>{var a,i;const r=K(),n=N();return e.jsx(M,{form:r,onSubmit:Q,children:e.jsxs(H,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(T,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var f,h,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,j,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(b=(j=c.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var y,B,v;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var g,C,L;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,O,_;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var E,R,D;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} isInvalid onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var W,A,P;F.parameters={...F.parameters,docs:{...(W=F.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileField multiple>
              <Label>Certificate</Label>
              <Button variant="outline" color="secondary">
                Select
              </Button>
            </FileField>
          </Field>
          {form.watch("file")?.[0]?.name}
          <ActionGroup>
            <Button type="submit">Upload</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(P=(A=F.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const ar=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,d as IconButton,c as ReadOnly,p as WithDescription,m as WithError,u as WithHandler,F as WithReactHookForm,ar as __namedExportsOrder,sr as default};
