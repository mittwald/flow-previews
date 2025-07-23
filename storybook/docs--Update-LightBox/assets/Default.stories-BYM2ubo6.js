import{j as r}from"./iframe-DR0piQh8.js";import{D as k,$ as S,X as b,H as v,a0 as B}from"./IconWarning-BgT_B94B.js";import{L as m}from"./Link-Dy6-QLBA.js";import{H as s}from"./HeaderNavigation-CSo538qn.js";import{B as o}from"./Button-YikxumGf.js";import{T as p}from"./Text-6uPYoec8.js";import{I as C}from"./Image-IJBKMAFa.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CL1DdbZc.js";import{a as D,C as y,M as c}from"./ContextMenuContent-B9JunCwJ.js";import"./ContextMenuSection-oEEZvvIf.js";import{a as A,M as G}from"./Modal-BE9dadvr.js";import{H as E}from"./Heading-Dl4Rh0-m.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B6cRF0tH.js";import"./mergeRefs-ZMps22uY.js";import"./index-t1lRf4w9.js";import"./useLocalizedStringFormatter-M2t-zX-G.js";import"./context-BuOVuQqB.js";import"./utils-B_3T_k5x.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-B4R9EPAI.js";import"./useFocus-Drlqt-a_.js";import"./useFocusRing-DNATWZb5.js";import"./useFocusable-CKOeQoF-.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-D1Z7RG5x.js";import"./Button-1sXVFcCN.js";import"./ProgressBar-NTw_CuGV.js";import"./Label-DF_i3q4X.js";import"./Hidden-Ccv39zY0.js";import"./useLabel-dFBcJ0PQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BcxJfz-7.js";import"./EmulatedBoldText-bwsNBgve.js";import"./Text-Me8NF-Lu.js";import"./AlertIcon-CnN5_-8U.js";import"./Action-CNI9x9AO.js";import"./context-BdW5YDeU.js";import"./useStatic-DJ0ktc6X.js";import"./getActionGroupSlot-yJrAi_UC.js";import"./Popover-DipyulJr.js";import"./DialogTriggerView-BFIY75rz.js";import"./Dialog-D78Vapha.js";import"./RSPContexts-BmbbCtV6.js";import"./OverlayArrow-4l6fdOKa.js";import"./useControlledState-DHSSOs10.js";import"./Collection-CwV6zAW0.js";import"./CollectionBuilder-D0nds9w3.js";import"./Separator-DSMvoxad.js";import"./Input-DGCSbbdR.js";import"./SearchField-CvXwi28e.js";import"./FieldError-DwuKV3Gh.js";import"./Form-B6wqL0ga.js";import"./Group-C4Z-pBhO.js";import"./useTextField-B-D6SiAk.js";import"./useFormReset-DGc_F2ms.js";import"./TextField-CeU2qgF-.js";import"./SelectionManager-Bk9G3wL6.js";import"./useEvent-DS0BHrpr.js";import"./useCollator-M--gojr_.js";import"./FocusScope-QqKO2Hp7.js";import"./VisuallyHidden-XA-B9eQQ.js";import"./Switch-DKMXII1S.js";import"./Label-BflZTkh8.js";import"./useToggleState-CwT2N50j.js";import"./Overlay-DWpi-Hc_.js";import"./Header-CvnvmVfu.js";import"./ButtonView-B00vERiw.js";import"./Heading-Boa0iipQ.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,H;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(H=(T=n.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,Zr as default};
