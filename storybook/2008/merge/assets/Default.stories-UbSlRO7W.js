import{j as r}from"./iframe-BkQEXHdV.js";import{x as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-Bhg2W068.js";import{L as m}from"./Link-C1KcylOI.js";import{H as s}from"./HeaderNavigation-BrDr0xci.js";import{B as o}from"./Button-Pi6ts98U.js";import{T as p}from"./Text-waR3uY_i.js";import{I as C}from"./Image-D8jvNHY1.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Bj6ajmX2.js";import{b as y,C as A,M as c}from"./ContextMenuSection-fPmGy5Mt.js";import{a as D,M as E}from"./Modal-Vhx_0-ec.js";import{H as G}from"./Heading-CFJEQMAA.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DGcDvaD0.js";import"./mergeRefs-CrNR4Adf.js";import"./index-NrWjSaDr.js";import"./useLocalizedStringFormatter-C-gsK0Kk.js";import"./context-DYNAGC-2.js";import"./utils-vh8nJaNh.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CS8Sp9_K.js";import"./useFocus-DvrdYcoe.js";import"./useFocusRing-DgjuUHXy.js";import"./useFocusable-E_oKRPWi.js";import"./dynamic-BBWe3ygL.js";import"./LoadingSpinner-BoU0TUya.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-U99YD9dQ.js";import"./ProgressBar-BZ-kanOy.js";import"./Label-CmAFKzLd.js";import"./Hidden-B12OlcMW.js";import"./useLabel-B9G_gEh3.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-T6JBIPNk.js";import"./EmulatedBoldText-DAPjbogn.js";import"./Text-vqf5-lqk.js";import"./AlertIcon-D9EY3MhT.js";import"./Action-ZxRK_-5p.js";import"./context-D6bN450f.js";import"./useStatic-D2LoWVgv.js";import"./getActionGroupSlot-rKcLr1EF.js";import"./Popover-8rOZkqNf.js";import"./DialogTriggerView-wkk6S007.js";import"./RSPContexts-BoauDkAB.js";import"./ClearPropsContextView-DluELhC2.js";import"./useControlledState-DaeuqNOc.js";import"./FocusScope-1Unh1ODV.js";import"./useCollator-CckG7hwg.js";import"./VisuallyHidden-BJPXQOEU.js";import"./Collection-41evgXm1.js";import"./CollectionBuilder-CMEP5N_o.js";import"./context-Df1kKepL.js";import"./Separator-ITSOrukA.js";import"./SelectionManager-B2eDCuA_.js";import"./useEvent-XpLfJ4Ej.js";import"./Switch-BbY-iNWo.js";import"./Label-DCwzji4R.js";import"./useToggleState-D586bBrY.js";import"./useFormReset-C2GAx1Zc.js";import"./Overlay-Dgg15N1A.js";import"./ButtonView-doX-a1tA.js";import"./Heading-BV1AUrOJ.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},n={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=n.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Jr=["Default","WithContextMenu","Dark","Light"];export{n as Dark,t as Default,i as Light,e as WithContextMenu,Jr as __namedExportsOrder,Fr as default};
