import{j as r}from"./iframe-C037GO3p.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-tMH4RyLr.js";import{L as m}from"./Link-DnebGyxy.js";import{H as s}from"./HeaderNavigation-iewxHP-9.js";import{B as o}from"./Button-Cf9guGvq.js";import{T as p}from"./Text-1H8qvaGa.js";import{I as h}from"./Image-D7nxzYym.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CReaUPQA.js";import{C as M,M as c}from"./MenuItem-DIYqFRkS.js";import{C as I}from"./ContextMenuTrigger-Bm7MmnCk.js";import"./ContextMenuSection-yxbgVkhw.js";import{M as T}from"./ModalTrigger-DRIpgNaU.js";import{M as k}from"./Modal-DzeJT8sQ.js";import{H}from"./Heading-D6ofxLDB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DDhfot0o.js";import"./index-wUcB077p.js";import"./index-aVIlTX7l.js";import"./remote-BG6_lggN.js";import"./useLocalizedStringFormatter-yCwjB9xr.js";import"./context-Cm0s8R8a.js";import"./utils-B21QcS96.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CuP2Z3Ew.js";import"./usePress-DtHLFK3z.js";import"./useFocusRing-D8Rjq8L2.js";import"./useFocusable-DZHoKnFR.js";import"./dynamic-CXANBhHf.js";import"./LoadingSpinner-7anO2L1H.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-3UAE6tol.js";import"./ProgressBar-Cvwm74GX.js";import"./Label-B5WCISDn.js";import"./Hidden-CT4yCR-L.js";import"./useLabel-FMiMqQcP.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CtD1Hg4J.js";import"./EmulatedBoldText-BFdb5mKm.js";import"./Text-BlWqR5Lx.js";import"./AlertIcon-CoEhaz6M.js";import"./ActionBatch-BkGPDfVM.js";import"./useOverlayController-CulrQTjS.js";import"./useStatic-zK9KTA7T.js";import"./getActionGroupSlot-Be7CG0GW.js";import"./Popover-B6RVLTNX.js";import"./OverlayContextProvider-saupE8AB.js";import"./Dialog-Sd6ebC5F.js";import"./RSPContexts-Cx4BM4L8.js";import"./OverlayArrow-Ct00V4z2.js";import"./useControlledState-DIGHyhBs.js";import"./Collection--dT_Uf-3.js";import"./CollectionBuilder-BaeZE-8K.js";import"./SelectionIndicator-DMUN5t4K.js";import"./Separator-DqZ2iszF.js";import"./SelectionManager-DPHkBOMj.js";import"./useEvent-DWoTHX9Z.js";import"./useCollator-SPxqcFer.js";import"./FocusScope-ByEh1Q0k.js";import"./VisuallyHidden-DBGkoZNP.js";import"./Switch-rYCJKmsJ.js";import"./useFieldComponent-BW6tilSl.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CUmJuox2.js";import"./useFormReset-BmsW_IRy.js";import"./OverlayTrigger-B4ic7Mjc.js";import"./DialogTriggerView-D43G2O2Q.js";import"./Overlay-DtmfWyOD.js";import"./ButtonView-DKqFNzvb.js";import"./Flex-krSDMMbd.js";import"./Heading-DNAjQtPl.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const wr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,wr as __namedExportsOrder,qr as default};
