import{j as r}from"./iframe-B14Hztna.js";import{t as H,$ as S,X as b,J as v,a0 as B}from"./IconWarning-EXdx-O5E.js";import{L as m}from"./Link-BfBOEB9t.js";import{H as s}from"./HeaderNavigation-B9wphZjM.js";import{B as o}from"./Button-CgtdFPzc.js";import{T as p}from"./Text-CvN8mc0t.js";import{I as C}from"./Image-DdTcydQF.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar--EyPBsHF.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DaF-KKJ0.js";import"./ContextMenuSection-CZ89H5a4.js";import{a as D,M as G}from"./Modal-o2EloFJL.js";import{H as E}from"./Heading-BQAgHHsC.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-uadcFCMp.js";import"./mergeRefs-Bv4UzjNV.js";import"./index-BavqP8B-.js";import"./useLocalizedStringFormatter-Dv2L7e6J.js";import"./context-ClRpg4Pi.js";import"./utils-DoVwnhJ7.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CIDHtETH.js";import"./useFocus-DUtc_xDc.js";import"./useFocusRing-BniRYtyP.js";import"./useFocusable-qJIKezDE.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BUgI2O_m.js";import"./Button-C-dpYs0v.js";import"./ProgressBar-DTeLqJx_.js";import"./Label-Dj1DBquH.js";import"./Hidden-DEGhv2S1.js";import"./useLabel-BQ9idzkA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-DQtsHFqq.js";import"./EmulatedBoldText-CgkGARPI.js";import"./Text-CpIc-G8R.js";import"./AlertIcon-CbWA53Xf.js";import"./Action-C7DGnd--.js";import"./context-BfdzKOWn.js";import"./useStatic-CMMnV-8N.js";import"./getActionGroupSlot-Coxgvja7.js";import"./Popover-04r-SnMx.js";import"./DialogTriggerView-jAz3y-z7.js";import"./Dialog-BFvasG0n.js";import"./RSPContexts-Bfi0I49R.js";import"./OverlayArrow-DZfk_ErB.js";import"./useControlledState-ByF29kyY.js";import"./Collection-fH4Kmtgq.js";import"./CollectionBuilder-bLuJ-4e5.js";import"./Separator-D2GbxrzK.js";import"./Input-DpcS1CTS.js";import"./SearchField-BKuT-taP.js";import"./FieldError-Bx0_OVZy.js";import"./Form-Dxjc7g8l.js";import"./Group-CBVKEx7-.js";import"./useTextField-BRjgXeuB.js";import"./useFormReset-C7VrIa_J.js";import"./TextField-CPtvewAJ.js";import"./SelectionManager-DXvn-F5v.js";import"./useEvent-CXj5GaK9.js";import"./useCollator-BOITc0eH.js";import"./FocusScope-GGet2N6d.js";import"./VisuallyHidden-B90-554O.js";import"./Switch-D-38tazE.js";import"./Label-zfejy0bC.js";import"./useToggleState-CyLes_UD.js";import"./Overlay-ROxUPphx.js";import"./Header-D3D2As4n.js";import"./ButtonView-BGYabchC.js";import"./Heading-CdQRJe-S.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,Zr as default};
