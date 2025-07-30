import{j as r}from"./iframe-Dx9XfaX_.js";import{t as H,$ as S,X as b,J as v,a0 as B}from"./IconWarning-BYDskjWX.js";import{L as m}from"./Link-B0FUtyiJ.js";import{H as s}from"./HeaderNavigation-DB1mEndr.js";import{B as o}from"./Button-MatbmytM.js";import{T as p}from"./Text-DiCJ_7I6.js";import{I as C}from"./Image-CXI-kmyC.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BdndRQmH.js";import{a as y,C as A,M as c}from"./ContextMenuContent-pC_Xh4a0.js";import"./ContextMenuSection-pEGSbiSy.js";import{a as D,M as G}from"./Modal-BS3NcBp0.js";import{H as E}from"./Heading-D16zd8UL.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DO4Dnyvq.js";import"./mergeRefs-Do6vvZAc.js";import"./index-BXqdq2Ma.js";import"./useLocalizedStringFormatter-DXL8o4sQ.js";import"./context-CaqfYy9P.js";import"./utils-CRV-JyXd.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CA1KERpG.js";import"./useFocus-5jQbhqKe.js";import"./useFocusRing-Dq63eQZe.js";import"./useFocusable-B_6jRB6i.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CnF3-Zd6.js";import"./Button-DbcQ2aGW.js";import"./ProgressBar-CsQvJS_j.js";import"./Label-DwfrzMrM.js";import"./Hidden-Cf6kyMxF.js";import"./useLabel-B5pgN2NU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-vROwQYx1.js";import"./EmulatedBoldText-Bd1dp7Af.js";import"./Text-8Az0PCun.js";import"./AlertIcon-B1RI9fn2.js";import"./Action-5arwAh_1.js";import"./context-CC-SH_Jq.js";import"./useStatic-B-mnmZm1.js";import"./getActionGroupSlot-B_y_2xMg.js";import"./Popover-DLaNI3Pf.js";import"./DialogTriggerView-DV5TVcRN.js";import"./Dialog-wXYbJuwK.js";import"./RSPContexts-C2UEl3bJ.js";import"./OverlayArrow-BvGktdbH.js";import"./useControlledState-B-pjTNcE.js";import"./Collection-DIxctTuu.js";import"./CollectionBuilder-Bwrs6onG.js";import"./Separator-DPSNb7Zj.js";import"./Group-DNiybGdz.js";import"./SearchField-HH6yUbMg.js";import"./FieldError-DljPEn2l.js";import"./Form-DItLtMsi.js";import"./useTextField-utlMkyTR.js";import"./useFormReset-CJtNuDui.js";import"./TextField-C-GKv5_s.js";import"./useEvent-DGEo5c64.js";import"./SelectionManager-Dr9cLJlV.js";import"./useCollator-BpkBnSqV.js";import"./FocusScope-eWFX0WV3.js";import"./VisuallyHidden-BktHc-NH.js";import"./Switch-C70onSdZ.js";import"./Label-BC2AwvSS.js";import"./useToggleState-BPAzlRMT.js";import"./Overlay-Cl9KIoMn.js";import"./Header-Bdh3_ZXr.js";import"./ButtonView-D2U0ne_Q.js";import"./Heading-Csd_7Su7.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
